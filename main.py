import trigger_engine as triggers
from pricing_engine import calculate_premium

def test_quote(zone, date, base_earn=5000):
    print(f"\n>> running quote for: {zone} | date: {date}")
    
    # 1. location check
    lat, lon = triggers.get_coords(zone)
    if not lat:
        print("err: couldn't find coords.")
        return
        
    # 2. ping external triggers
    festival_name = triggers.get_festival(date)
    is_fest = bool(festival_name)
    
    env_data = triggers.check_disruptions(lat, lon)
    
    # neat lil terminal trace
    fest_str = festival_name if is_fest else "None"
    print(f"conditions -> weather: {env_data['weather']}, aqi: {env_data['aqi']}, holiday: {fest_str}")

    # 3. calculate price (assuming base risk 8% and 20% severity from the project docs)
    prem = calculate_premium(
        base_earnings=base_earn,
        prob=0.08,
        severity=0.20,
        is_fest=is_fest,
        env_risk_mod=env_data['risk_multiplier']
    )
    
    print(f"FINAL PREMIUM: Rs. {prem}")

if __name__ == '__main__':
    # test 1: std day in 2026
    test_quote("HSR Layout, Bengaluru", "2026-07-10")
    
    # test 2: deepavali 2026 (festival bump!)
    test_quote("Koramangala, Bengaluru", "2026-11-10")