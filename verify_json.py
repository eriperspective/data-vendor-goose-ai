#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Verify Dmitri's JSON data is valid and parseable
Bonus challenge solution!
"""

import json
import sys

def verify_vendor_data(filename):
    """Load and verify the vendor JSON data"""
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print("SUCCESS: JSON is valid!")
        print(f"\nFound {len(data['vendors'])} vendors:")
        print("=" * 60)
        
        for vendor in data['vendors']:
            print(f"\n* {vendor['name']}")
            print(f"  Location: {vendor['location']}")
            print(f"  Cuisine: {vendor['cuisine']}")
        
        print("\n" + "=" * 60)
        print(f"Total vendors: {len(data['vendors'])}")
        
        # Get unique cuisines
        cuisines = set(v['cuisine'] for v in data['vendors'])
        print(f"Cuisine types: {len(cuisines)}")
        print(f"  {', '.join(sorted(cuisines))}")
        
        # Get unique locations
        locations = set(v['location'] for v in data['vendors'])
        print(f"Locations: {len(locations)}")
        
        print("\nDmitri's data is ready to use!")
        return True
        
    except FileNotFoundError:
        print(f"ERROR: File '{filename}' not found!")
        return False
    except json.JSONDecodeError as e:
        print(f"ERROR: Invalid JSON - {e}")
        return False
    except KeyError as e:
        print(f"ERROR: Missing expected key - {e}")
        return False
    except Exception as e:
        print(f"ERROR: Unexpected error: {e}")
        return False

if __name__ == "__main__":
    filename = "dmitris-sanity-saver.json"
    if len(sys.argv) > 1:
        filename = sys.argv[1]
    
    success = verify_vendor_data(filename)
    sys.exit(0 if success else 1)
