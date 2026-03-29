import requests

# 2026 Holiday Calendar [all govt holidays]
HOLIDAYS_2026 = {
    "2026-01-01": "New Year's Day",
    "2026-01-15": "Makara Sankranti",
    "2026-01-26": "Republic Day",
    "2026-02-15": "Maha Shivratri",
    "2026-03-19": "Ugadi",
    "2026-03-21": "Khutub-E-Ramzan",
    "2026-03-31": "Mahaveera Jayanti",
    "2026-04-01": "Annual Bank Closing",
    "2026-04-03": "Good Friday",
    "2026-04-14": "Dr. B.R. Ambedkar Jayanti",
    "2026-04-20": "Basava Jayanti",
    "2026-05-01": "May Day",
    "2026-05-28": "Bakrid",
    "2026-06-26": "Last Day of Moharram",
    "2026-08-15": "Independence Day",
    "2026-08-26": "Eid-e-Milad",
    "2026-09-14": "Varasiddhi Vinayaka Vrata",
    "2026-10-02": "Mahatma Gandhi Jayanti",
    "2026-10-20": "Mahanavami / Ayudha Pooja",
    "2026-10-21": "Vijayadashami",
    "2026-11-10": "Deepavali",
    "2026-11-27": "Kanakadasa Jayanti",
    "2026-12-25": "Christmas Day"
}

def get_coords(zone_name):
    # Using openstreetmap nominatim (custom user agent to avoid 403 blocks)
    headers = {"User-Agent": "LastMile_MVP/0.1"}
    url = f"https://nominatim.openstreetmap.org/search?q={zone_name}&format=json&limit=1"
    
    try:
        res = requests.get(url, headers=headers)
        data = res.json()
        if not data:
            return None, None
        return float(data[0]['lat']), float(data[0]['lon'])
    except Exception as e:
        print(f"geocoding failed for {zone_name}: {e}")
        return None, None

def check_disruptions(lat, lon):
    # Default state 
    status = {"weather": "normal", "aqi": "normal", "risk_multiplier": 0.0}
    if not lat or not lon:
        return status
        
    try:
        # Open-Meteo API (chaining .json().get() to keep it short)
        w_url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=precipitation"
        rain = requests.get(w_url).json().get("current", {}).get("precipitation", 0)
        
        aqi_url = f"https://air-quality-api.open-meteo.com/v1/air-quality?latitude={lat}&longitude={lon}&current=pm2_5"
        pm25 = requests.get(aqi_url).json().get("current", {}).get("pm2_5", 0)

        # Trigger logic from README
        if rain > 10.0:
            status["weather"] = "heavy_rain"
            status["risk_multiplier"] += 0.15
            
        if pm25 > 150:
            status["aqi"] = "severe"
            status["risk_multiplier"] += 0.10
            
    except Exception as e:
        print("api err fetching weather/aqi:", e)
        
    return status

def get_festival(dt_str):
    # Returns the name of the festival if it exists, otherwise None
    return HOLIDAYS_2026.get(dt_str)