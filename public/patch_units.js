const fs = require('fs');

let content = fs.readFileSync('data.js', 'utf8');

// I need to add equipment and units to the mock data.
// It's easier if I parse the mock data (the injected lines) and modify them, but since it's just text,
// I can just replace specific objects. Or even better, just run a regex replace for the specific fields.
// Or just evaluate the file, modify the object, and write it back? No, file is huge, evaluating it might be slow or we lose comments.
// Let's use string replacement.

content = content.replace(
  /"id": "me_202606_malabar",([^}]*)"exercise_domain": \[\s*"Maritime Security",\s*"ASW"\s*\]/g,
  `"id": "me_202606_malabar",$1"exercise_domain": [ "Maritime Security", "ASW" ],
          "indian_units": [ "Eastern Fleet Units", "P8I Squadron" ],
          "foreign_units": [ "US 7th Fleet", "JMSDF Escort Flotilla" ],
          "equipment_used": {
              "india": [ "INS Shivalik", "INS Kamorta", "P-8I Neptune" ],
              "foreign": [ "USS Ronald Reagan", "F/A-18 Super Hornet", "JS Izumo" ]
          }`
);

content = content.replace(
  /"id": "me_202605_varuna",([^}]*)"exercise_domain": \[\s*"Maritime Security",\s*"Naval Aviation"\s*\]/g,
  `"id": "me_202605_varuna",$1"exercise_domain": [ "Maritime Security", "Naval Aviation" ],
          "indian_units": [ "Western Fleet" ],
          "foreign_units": [ "French Carrier Strike Group" ],
          "equipment_used": {
              "india": [ "INS Chennai", "MiG-29K", "Scorpene Class Submarine" ],
              "foreign": [ "FS Charles de Gaulle", "Rafale-M" ]
          }`
);

content = content.replace(
  /"id": "me_202604_gagan_strike",([^}]*)"exercise_domain": \[\s*"Air-Ground Integration"\s*\]/g,
  `"id": "me_202604_gagan_strike",$1"exercise_domain": [ "Air-Ground Integration" ],
          "indian_units": [ "Kharga Corps (Ambala)", "Western Air Command" ],
          "equipment_used": {
              "india": [ "T-90 Bhishma Tanks", "AH-64E Apache Helicopters", "ALH Weapon System Integrated (WSI)" ],
              "foreign": []
          }`
);

content = content.replace(
  /"id": "me_202603_aid_venezuela",([^}]*)"exercise_domain": \[\s*"HADR"\s*\]/g,
  `"id": "me_202603_aid_venezuela",$1"exercise_domain": [ "HADR" ],
          "indian_units": [ "No. 81 Squadron IAF", "Naval Fleet Support Squadron" ],
          "foreign_units": [ "Venezuelan Civil Defence" ],
          "equipment_used": {
              "india": [ "C-17 Globemaster III", "INS Jalashwa", "Medical Relief Equipment" ],
              "foreign": [ "Local logistics support vehicles" ]
          }`
);

content = content.replace(
  /"id": "me_202602_milan",([^}]*)"exercise_domain": \[\s*"Maritime Security",\s*"Interoperability"\s*\]/g,
  `"id": "me_202602_milan",$1"exercise_domain": [ "Maritime Security", "Interoperability" ],
          "indian_units": [ "Eastern Naval Command" ],
          "foreign_units": [ "Naval units from 50+ countries" ],
          "equipment_used": {
              "india": [ "INS Vikrant", "INS Visakhapatnam", "Tejas LCA (Naval)", "P-8I" ],
              "foreign": [ "Various Frigates and Destroyers" ]
          }`
);

content = content.replace(
  /"id": "me_202601_desert_cyclone",([^}]*)"exercise_domain": \[\s*"Urban Warfare",\s*"Counter-Terrorism"\s*\]/g,
  `"id": "me_202601_desert_cyclone",$1"exercise_domain": [ "Urban Warfare", "Counter-Terrorism" ],
          "indian_units": [ "Mechanised Infantry Regiment" ],
          "foreign_units": [ "Zayed First Brigade" ],
          "equipment_used": {
              "india": [ "BMP-2 Sarath", "Small Arms", "Drone systems" ],
              "foreign": [ "Armoured Personnel Carriers", "Sniper Rifles" ]
          }`
);

fs.writeFileSync('data.js', content, 'utf8');
console.log('Successfully added units and equipment to exercises.');
