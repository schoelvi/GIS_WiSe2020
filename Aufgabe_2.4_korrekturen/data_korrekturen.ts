namespace Aufgabe_2_4_korrektur {

    export let simJSON: string = 
    `
    {
        "haare":  [
           {"link": "assets/haare/sim1_kopf.jpg", "name": "Weiße Haare", "typ": "haare"}, 
           {"link": "assets/haare/sim2_kopf.jpg", "name": "Schwarze Haare", "typ": "haare"},      
           {"link": "assets/haare/sim3_kopf.jpg", "name": "Pinke Haare", "typ": "haare"},
           {"link": "assets/haare/sim4_kopf.jpg", "name": "Grüne Haare", "typ": "haare"}
        ],

       "shirt":  [
            {"link": "assets/shirt/sim1_shirt.jpg", "name": "#sassy - Shirt", "typ": "shirt"}, 
            {"link": "assets/shirt/sim2_shirt.jpg", "name": "more issues than vogue - Shirt", "typ": "shirt"},      
            {"link": "assets/shirt/sim3_shirt.jpg", "name": "Lippen - Shirt", "typ": "shirt"},
            {"link":"assets/shirt/sim4_shirt.jpg", "name": "is it fry-day yet - Shirt", "typ": "shirt"}
        ],

       "hose":  [
            {"link": "assets/hose/sim1_hose.jpg", "name": "Schwarze Hose", "typ": "hose"}, 
            {"link": "assets/hose/sim2_hose.jpg", "name": "Weiße Hose", "typ": "hose"},      
            {"link": "assets/hose/sim3_hose.jpg", "name": "Blaue Hose", "typ": "hose"},
            {"link": "assets/hose/sim4_hose.jpg", "name": "Rote Hose", "typ": "hose"}
        ]        
    }
    `
    ;
    export let derSim: Sim = JSON.parse(simJSON);
}