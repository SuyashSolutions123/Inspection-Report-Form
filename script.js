// wight calculating formula
      function calculateExpectedWeight() {
      let customValue = parseFloat(document.getElementById("formulaInputValue").value);
      let customUnit = document.getElementById("customUnit").value;
      const enteredQuantity = parseFloat(document.getElementById("formulaQuantityValue").value);
      const actualQuantity = parseFloat(document.getElementById("actualQuantity").value);  
      
      if (isNaN(customValue) || isNaN(enteredQuantity) || isNaN(actualQuantity)) {
        alert("Please enter valid numbers in all fields.");
        return;
      }
      
      let adjustedCustomValue = customValue;
      if (customUnit === 'Kg') {
        adjustedCustomValue = customValue * 1000; //converted to gram
      const weightPerUnit = adjustedCustomValue / enteredQuantity ;
      const expectedWeight = (weightPerUnit * actualQuantity) / 1000; //converted to Kg
      document.getElementById("Expected_Weight").value = expectedWeight.toFixed(2) + " " + customUnit;
      }else if (customUnit === 'gram') {
      const weightPerUnit = adjustedCustomValue / enteredQuantity;
      const expectedWeight = (weightPerUnit * actualQuantity)/ 1000; // converted to Kg 
	document.getElementById("Expected_Weight").value = expectedWeight.toFixed(2) + " " + "Kg";
    }
}

	
    // fuction to generate reference code    
    function generateReferenceNumber() {
    const prefix = 'SSQC';
    // Get the current date and time
    const now = new Date();
    // Extract date parts
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JavaScript
    const year = String(now.getFullYear()).slice(-2); // Get last two digits of the year
    // Extract time parts
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    // Form the date and time parts
    const datePart = `${day}${month}${year}`;
    const timePart = `${hours}${minutes}${seconds}`;
    const referenceNumber = `${prefix}-${datePart}/${timePart}`;// Form the reference number
    return referenceNumber;
}
    // console.log(generateReferenceNumber());
    var referenceNumber = generateReferenceNumber();
         const productData = {
            "products": [
                {
                    "name": "CARBON SILICON ANALYSER HDMI gateway - MODEL-III",
                    "code": "FA001",
                    "fields": [
                        { "label": "Make :- FLUXION PROCESS SOLUTIONS", "name": "Make :- FLUXION PROCESS SOLUTIONS" },
                        { "label": "As Per Drawing :- DRG 27 to DRG/30", "name": "As Per Drawing :- DRG 27 to DRG/30" },
                       
                    ]
                },
                {
                    "name": "CARBON SILICON ANALYSER - LCD ONLINE",
                    "code": "FA002",
                    "fields": [
                        { "label": "Make:-FLUXION PROCESS SOLUTIONS", "name": "Make:-FLUXION PROCESS SOLUTIONS" },
			                  { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                    ]
                },
                {
                    "name": "CARBON SILICON ANALYSER - MODEL-III",
                    "code": "FA003",
                    "fields": [
                        { "label": "Make:-FLUXION PROCESS SOLUTIONS", "name": "Make:-FLUXION PROCESS SOLUTIONS" },
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                        
                    ]
                },
                    {
                    "name": "OXYLAB",
                    "code": "FA004",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" },
                        { "label": "Make Of Display:- HP ONLY", "name": "Make Of Display:- HP ONLY" }
                        
                    ]
                },
                    {
                    "name": "ONLINE  1  WAY",
                    "code": "FA005",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" },
                        { "label": "Make Of Display:- HP ONLY", "name": "Make Of Display:- HP ONLY" }
                        
                    ]
                },
                    {
                    "name": "DISPLAY CARD FOR CSA III",
                    "code": "FA006",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                        
                    ]
                },
                    {
                    "name": "MAIN CARD ASSEMBLY FOR CSA III",
                    "code": "FA007",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                        
                    ]
                },
                    {
                    "name": "CALIBRATION CARD FOR CSA III",
                    "code": "FA008",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                        
                    ]
                },    {
                    "name": "ONLINE 2 WAY",
                    "code": "FA009",
                    "fields": [
                        { "label": "Make :- FLUXION PROCESS SOLUTIONS", "name": "Make :- FLUXION PROCESS SOLUTIONS" },
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                       
                    ]
                },
                    {
                    "name": "LM335 WITH WIRE",
                    "code": "FA010",
                    "fields": [
                        { "label": "IC:-LM335", "name": "IC:-LM335" }
                       
                    ]
                },   
		 {
                    "name": "RAM  FOR CSA MODEL - III",
                    "code": "FA011",
                    "fields": [
                        { "label": "IC:-MK 48 T 08-100 PC1 (contains lithium cell)", "name": "IC:-MK 48 T 08-100 PC1 (contains lithium cell)" }
                        
                    ]
                },
                    {
                    "name": "CARBON SILICON ANALYSER -ONLINE ONE WAY",
                    "code": "FA012",
                    "fields": [
                        { "label": "Make:-FLUXION PROCESS SOLUTIONS", "name": "Make:-FLUXION PROCESS SOLUTIONS" },
                        { "label": "As Per Drawing:- DRG 27 to DRG/30", "name": "As Per Drawing:- DRG 27 to DRG/30" }
                        
                    ]
                },
                    {
                    "name": "BIG DISPLAY CPU CARD",
                    "code": "FA013",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                       
                    ]
                },
                    {
                    "name": "CSA ISOLATOR - ONLINE ONE WAY",
                    "code": "FA014",
                    "fields": [
                        { "label": "Test Certificate:- MANUFACTURE'S  TC", "name": "Test Certificate:- MANUFACTURE'S  TC" }
                        
                    ]
                },
                    {
                    "name": "DC VALVE FESTO 5_1/8 FOR ST02",
                    "code": "FC001",
                    "fields": [
                        { "label": "CYCLE TIME:- 3 MIN", "name": "CYCLE TIME:- 3 MIN" },
                        { "label": "TEMP. LOWER DIE:- 165-220 DEG.C", "name": "TEMP. LOWER DIE:- 165-220 DEG.C" },
                        { "label": "TEMP. UPPER DIE:- 160-220 DEG.C", "name": "TEMP. UPPER DIE:- 160-220 DEG.C" },
                        { "label": "AIR PRESSURE STATION -I:- 6-8 BAR", "name": "AIR PRESSURE STATION -I:- 6-8 BAR" },
                        { "label": "AIR PRESSURE STATION -II:- 8-10 BAR", "name": "AIR PRESSURE STATION -II:- 8-10 BAR" },
                        { "label": "VOLTAGE:- 390", "name": "VOLTAGE:- 390" }
                    ]
                },
                    {
                    "name": " New Super Cup-New wire",
                    "code": "FC002",
                    "fields": [
                        { "label": "CYCLE TIME:- 3 MIN", "name": "CYCLE TIME:- 3 MIN" },
                        { "label": "TEMP. LOWER DIE:- 165-220 DEG.C", "name": "TEMP. LOWER DIE:- 165-220 DEG.C" },
                        { "label": "TEMP. UPPER DIE:- 160-220 DEG.C", "name": "TEMP. UPPER DIE:- 160-220 DEG.C" },
                        { "label": "AIR PRESSURE STATION -I:- 6-8 BAR", "name": "AIR PRESSURE STATION -I:- 6-8 BAR" },
                        { "label": "AIR PRESSURE STATION -II:- 8-10 BAR", "name": "AIR PRESSURE STATION -II:- 8-10 BAR" }
                        
                    ]
                },
                    {
                    "name": "CARBON CUP - SUPER CUP -CE CUP",
                    "code": "FC003",
                    "fields": [
                        { "label": "Sample Time", "name": "Sample Time" },
                        { "label": "CYCLE TIME:- 3 MIN", "name": "CYCLE TIME:- 3 MIN" },
                        { "label": "TEMP. LOWER DIE:- 165-220 DEG.C", "name": "TEMP. LOWER DIE:- 165-220 DEG.C" },
                         { "label": "TEMP. UPPER DIE:- 160-220 DEG.C", "name": "TEMP. UPPER DIE:- 160-220 DEG.C" },
                          { "label": "VOLTAGE:- 390", "name": "VOLTAGE:- 390" },
                           { "label": "AIR PRESSURE STATION -I:- 6-8 BAR", "name": "AIR PRESSURE STATION -I:- 6-8 BAR" },
                            { "label": "AIR PRESSURE STATION -II:- 8-10 BAR", "name": "AIR PRESSURE STATION -II:- 8-10 BAR" }
                      
                    ]
                },
                    {
                    "name": "CARBON CUP -Super Cup (New)",
                    "code": "FC004",
                    "fields": [
                        { "label": "Sample Time:- 3", "name": "Sample Time:- 3" },
                        { "label": "TEMP. LOWER DIE:- 165-220 DEG.C", "name": "TEMP. LOWER DIE:- 165-220 DEG.C" },
                        { "label": "TEMP. UPPER DIE:- 160-220 DEG.C", "name": "TEMP. UPPER DIE:- 160-220 DEG.C" },
                        { "label": "AIR PRESSURE STATION -I:- 6-8 BAR", "name": "AIR PRESSURE STATION -I:- 6-8 BAR" },
                        { "label": "AIR PRESSURE STATION -II:- 8-10 BAR", "name": "AIR PRESSURE STATION -II:- 8-10 BAR" },
                        { "label": "VOLTAGE:- 380 to 400", "name": "VOLTAGE:- 380 to 400" }
                       
                    ]
                },
                    {
                    "name": "CARBON CUP- SQUARE CUP 2 TE",
                    "code": "FC005",
                    "fields": [
                        { "label": "Sample Time", "name": "Sample Time" },
                        { "label": "CYCLE TIME:- 3 MIN", "name": "CYCLE TIME:- 3 MIN" },
                        { "label": "TEMP. LOWER DIE:- 165-180 DEG.C", "name": "TEMP. LOWER DIE:- 165-180 DEG.C" },
                         { "label": "TEMP. UPPER DIE:- 170-190 DEG.C", "name": "TEMP. UPPER DIE:- 170-190 DEG.C" },
                          { "label": "Lower Die Air Pressure:- 6-9 bar", "name": "Lower Die Air Pressure:- 6-9 bar" }
                          
                    ]
                },
                    {
                    "name": "CARBON CUP -SQUARE CUP (NON TE)",
                    "code": "FC006",
                    "fields": [
                        { "label": "SAMPLE TIME", "name": "SAMPLE TIME" },
                        { "label": "CYCLE TIME 3 TIME", "name": "CYCLE TIME 3 TIME" },
                        { "label": "LOWER DIE TEMPERTORE :- 165-180 DEG. C", "name": "LOWER DIE TEMPERTORE :- 165-180 DEG. C" },
                        { "label": " TOP DIE TEMPERATORE 170-190 DEG.C", "name": " TOP DIE TEMPERATORE 170-190 DEG.C" },
                        { "label": " LOWER DIE PRESSURE 6-9 BAR", "name": " LOWER DIE PRESSURE 6-9 BAR" }
                    ]
                },
                    {
                    "name": "CARBON CUP - SUPER CUP - 4 TE",
                    "code": "FC010",
                    "fields": [
                        { "label": "Cycle Time 3 Minitue", "name": "Cycle Time 3 Minitue" },
                        { "label": " Voltage 390", "name": " Voltage 390" },
                        { "label": "Temp. Lower Die 165-220 Deg. C", "name": " Temp. Lower Die 165-220 Deg. C" },
                        { "label": "Temp. Upper Die 160-220 Deg. C", "name": "Temp. Upper Die 160-220 Deg. C" },
                        { "label": "Air Pressure 6-8 Bar", "name": "Air Pressure 6-8 Bar" },
                        { "label": "Air Pressure 8-10 Bar", "name": "Air Pressure 8-10 Bar" }
                    ]
                },
                    {
                    "name": "SAMPLER 600 MM  - ALUMINIUM",
                    "code": "FC011",
                    "fields": [
                        { "label": "FITTING:- NO GAP PAPER TUBE & SAMPLAR", "name": "FITTING:- NO GAP PAPER TUBE & SAMPLAR" }
                       
                    ]
                },
                    {
                    "name": "ANTENA FOR WIRELESS INDICATOR",
                    "code": "FC013",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:-  OK", "name": "ONLY QTY.TO BE CHECKING:-  OK" }
                        
                    ]
                },
                    {
                    "name": "CARBON CUP - SUPER CUP ( SULPHUR )",
                    "code": "FC014",
                    "fields": [
                        { "label": "CYCLE TIME", "name": "CYCLE TIME" },
                        { "label": "VOLTAGE 390", "name": "VOLTAGE 390" },
                        { "label": "TEMP. LOWER DIE 165-220 DEG.C.", "name": "TEMP. LOWER DIE 165-220 DEG.C." },
                        { "label": "TEMP.UPPER DIE 165-220 DEG.C.", "name": "TEMP.UPPER DIE 165-220 DEG.C." },
                        { "label": "AIR PRESSURE-STATION -1:- 6-8 BAR", "name": "AIR PRESSURE-STATION -1:- 6-8 BAR" },
                        { "label": "AIR PRESSURE - STATION - 2:- 8-10 BAR", "name": "AIR PRESSURE - STATION - 2:- 8-10 BAR" }
                    ]
                },
                    {
                    "name": "CARBON CUP - SUPER",
                    "code": "FC017",
                    "fields": [
                        { "label": "CYCLE TIME 3 MINITUE", "name": "CYCLE TIME 3 MINITUE" },
                        { "label": "VOLTAGE 390", "name": "VOLTAGE 390" },
                        { "label": "TEMP. LOWER DIE 165-220 DEG.C.", "name": "TEMP. LOWER DIE 165-220 DEG.C." },
                        { "label": "TEMP.UPPER DIE 160-220 DEG.C.", "name": "TEMP.UPPER DIE 160-220 DEG.C." },
                        { "label": "AIR PRESSURE-STATION -1:- 6-8 BAR", "name": "AIR PRESSURE-STATION -1:- 6-8 BAR" },
                        { "label": "AIR PRESSURE - STATION - 2:- 8-10 BAR", "name": "AIR PRESSURE - STATION - 2:- 8-10 BAR" }
                    ]
                },
                    {
                    "name": "CARBON CUP - SUPER CUP - 2 TE",
                    "code": "FC018",
                    "fields": [
                        { "label": "CYCLE TIME 3 MINITUE", "name": "CYCLE TIME 3 MINITUE" },
                        { "label": "AIR PRESSURE - STATION - 1:- 6 - 8  BAR", "name": "AIR PRESSURE - STATION - 1:- 6 - 8  BAR" },
                        { "label": "AIR PRESSURE - STATION - 2:- 8 - 10  BAR", "name": "AIR PRESSURE - STATION - 2:- 8 - 10  BAR" },
                        { "label": "TEMP. LOWER DIE 165  -220", "name": "TEMP. LOWER DIE 165  -220" },
                        { "label": "TEMP. UPPER DIE 160 - 220", "name": "TEMP. UPPER DIE 160 - 220" },
                        { "label": "VOLTAGE 390", "name": "VOLTAGE 390" }
                    ]
                },
                    {
                    "name": "3 MM ID METAL BUSH FOR ST02",
                    "code": "FC019",
                    "fields": [
                        { "label": "CYCLE TIME 3  +/- 0.5 MINITUE", "name": "CYCLE TIME 3  +/- 0.5 MINITUE" },
                        { "label": "AIR PRESSURE STATION-1 6-8 BAR", "name": "AIR PRESSURE STATION-1 6-8 BAR" },
                        { "label": "AIR PRESSURE STATION -2:- 8-10 BAR", "name": "AIR PRESSURE STATION -2:- 8-10 BAR" },
                        { "label": "TEMP.LOWAR DIA 165-220", "name": "TEMP.LOWAR DIA 165-220" },
                        { "label": "TEMP.UPPER DIA 160-220", "name": "TEMP.UPPER DIA 160-220" },
                        { "label": "VOLTAGE 390", "name": "VOLTAGE 390" }
                    ]
                },
                    {
                    "name": "CARBON CUP -NEW SUPER CUP -AP",
                    "code": "FC020",
                    "fields": [
                        { "label": "CYCLE TIME 3 MINITUE", "name": "CYCLE TIME 3 MINITUE" },
                        { "label": "VOLTEG 390", "name": "VOLTEG 390" },
                        { "label": "TEMP. LOWER DIE 165-220 DEG.C.", "name": "TEMP. LOWER DIE 165-220 DEG.C." },
                        { "label": "TEMP. UPPER DIE 160-220 DEG.C", "name": "TEMP. UPPER DIE 160-220 DEG.C" },
                        { "label": "AIR PRESSURE STATION - 1:- 6 - 8 BAR", "name": "AIR PRESSURE STATION - 1:- 6 - 8 BAR" },
                        { "label": "AIR PRESSURE STATION - 2:- 8 - 10 BAR", "name": "AIR PRESSURE STATION - 2:- 8 - 10 BAR" }
                    ]
                },
                    {
                    "name": "LANCE WITH 10 MTR. TIP CABLE 5 ft with Suyash Holder",
                    "code": "FL001",
                    "fields": [
                        { "label": "Length Of Pipe 5   +/- 1''  ft", "name": "Length Of Pipe 5   +/- 1''  ft" },
                        { "label": "Length Of Cable 10  +/- 0.1 mtr", "name": "Length Of Cable 10  +/- 0.1 mtr" },
                        { "label": " checking by vendor vendor test certificate", "name": " checking by vendor vendor test certificate" }
                    ]
                },
                    {
                    "name": "LANCE FOR PORTABLE WITH SUYASH HOLDER",
                    "code": "FL002",
                    "fields": [
                        { "label": "Total Length 5  +/-  1'' ft", "name": "Total Length 5  +/-  1'' ft" },
                        { "label": "Length Of Cable 5.5  + 0.5 / - 0.00  ft", "name": "Length Of Cable 5.5  + 0.5 / - 0.00  ft" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                    {
                    "name": "CUTTER MACHINE BOSCH GSK190_7INCH_FOR SAMPLER TUBE",
                    "code": "FL003",
                    "fields": [
                        { "label": "Total Length 10  +/- 1'' ft", "name": "Total Length 10  +/- 1'' ft" },
                        { "label": "Length of  Bend 2   + 0.5 / - 0.00  ft", "name": "Length of  Bend 2   + 0.5 / - 0.00  ft" },
                        { "label": "Length Of Cable 20 +/- 0.1  mtr", "name": "Length Of Cable 20 +/- 0.1  mtr" },
                         { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                    {
                    "name": "Lance -10 FT.STRAIGHT, 20 MTR.TIP CABLE,Suyash Holder",
                    "code": "FL004",
                    "fields": [
                        { "label": "Length Of Pipe 10  +/- 1 '' ft", "name": "Length Of Pipe 10  +/- 1'' ft" },
                        { "label": "Length Of Cable 20 +/- 0.1mtr", "name": "Length Of Cable 20 +/- 0.1mtr" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                    {
                    "name": "Lance S & P 10 FT. LANCE  2 FT Bend 20 MTR TIP Rubber  Cable",
                    "code": "FL006",
                    "fields": [
                        { "label": "Total Length 10  +/- 1''  FT", "name": "Total Length 10  +/- 1''  FT" },
                        { "label": "Length At Band 2 + 0.5 / -0.00 FT", "name": "Length At Band 2 + 0.5 / -0.00 FT" },
                        { "label": "Length of Cable 20  +/- 0.1  mtr", "name": "Length of Cable 20  +/- 0.1  mtr" },
                         { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" },
                          { "label": "Length of pipe 10 +/- 1''  FT", "name": " Length of pipe 10 +/- 1''  FT" },
                           { "label": "Length At cable 30  +/- 0.1  mtr", "name": " Length At cable 30  +/- 0.1  mtr" },
                            { "label": "CHECKING BY VENDOR VENDOR TEST ERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST ERTIFICATE" }
                    ]
                },
                {
                    "name": "LANCE WITH 20 MTR TIP CABLE",
                    "code": "FL007",
                    "fields": [
                        { "label": "LENGTH 5 +/- 1'' FT", "name": "LENGTH 5 +/- 1'' FT" },
                        { "label": "TIP CABLE 20 +/- 0.1 MTR", "name": "TIP CABLE 20 +/- 0.1 MTR" },
                        { "label": "CHECKING  BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING  BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "Stainless steel pipe -10 feet ( 13 * 16 )-bending",
                    "code": "FL008",
                    "fields": [
                        { "label": "length of pipe 10 +/- 1'' ft", "name": "length of pipe 10 +/- 1'' ft" },
                        { "label": "length at bend 3 + 0.5 / - 0.00 ft", "name": "length at bend 3 + 0.5 / - 0.00 ft" },
                        { "label": "length of cable 20 +/- 0.1 mtr", "name": "length of cable 20 +/- 0.1 mtr" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "Lance S & P TIP Holder 10 FT 3 FT BEND  20 MTR.TIP CABLE",
                    "code": "FL009",
                    "fields": [
                        { "label": "length of pipr 10 +/- 1'' ft", "name": "length of pipr 10 +/- 1'' ft" },
                        { "label": "length of bend 3  + 0.5 / - 0.00 ft", "name": "length of bend 3  + 0.5 / - 0.00 ft" },
                        { "label": "length at cable 20 +/- 0.1mt", "name": "length at cable 20 +/- 0.1mt" },
                         { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "Lance S & P TIP holder 10  FT 2 FT BEND 20 MTR. TIP CABLE",
                    "code": "FL011",
                    "fields": [
                        { "label": "Total Length 10  +/- 1''  FT", "name": "Total Length 10  +/- 1''  FT" },
                        { "label": "Length At Band 2  + 0.5 / -0.00  FT", "name": "Length At Band 2  + 0.5 / -0.00  FT" },
                        { "label": "Length of Cable 20  mtr  +/- 0.1 mtr", "name": "Length of Cable 20  mtr  +/- 0.1 mtr" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "Lance S & P Holder 5 Ft  10 MTR CABLE",
                    "code": "FL012",
                    "fields": [
                        { "label": "LENGTH OF PIPE 5 FT +/- 2'' ", "name": "LENGTH OF PIPE 5 FT +/- 2'' " },
                        { "label": "LENGTH OF CABLE 10 MTR +/- 0.25 MTR", "name": "LENGTH OF CABLE 10 MTR +/- 0.25 MTR" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "Lance with 10 FT.,3 FT.BEND,S&P Holder, 20 MTR.TIP RUBBER CABLE",
                    "code": "FL013",
                    "fields": [
                        { "label": "length of pipe 10 +/- 1'' ft", "name": "length of pipe 10 +/- 1'' ft" },
                        { "label": "length at bend 3  + 0.5 / - 0.00 ft", "name": "length at bend 3  + 0.5 / - 0.00 ft" },
                        { "label": "length of cable 20 +/- 0.1 mtr", "name": "length of cable 20 +/- 0.1 mtr" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "Lance with Portable & S & P Holder",
                    "code": "FL014",
                    "fields": [
                        { "label": "Total Length 5 +/-  1'' ft", "name": "Total Length 5 +/-  1'' ft" },
                        { "label": "Length Of Cable 5.5  + 0.5  / - 0.00  ft", "name": "Length Of Cable 5.5  + 0.5  / - 0.00  ft" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "Lance with S & P holder 10 FT STRAIGHT 20 MTR.TIP CABLE.",
                    "code": "FL015",
                    "fields": [
                        { "label": "Length Of Pipe 10   +/- 1'' ft", "name": "Length Of Pipe 10   +/- 1 '' ft" },
                        { "label": "Length Of Cable 20 +/- 0.1 mtr", "name": "Length Of Cable 20 +/- 0.1 mtr" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "CUP HOLDER FOR SQR CUP",
                    "code": "FM001",
                    "fields": [
                        { "label": "Distance Between 2 Wires 22.3 + 0.2 MM", "name": "Distance Between 2 Wires 22.3 + 0.2 MM" },
                        { "label": "Height Of Wires 16.5 +/- 0.5 mm", "name": "Height Of Wires 16.5 +/- 0.5 mm" },
                        { "label": "Height Of Wires 16.5 +/- 0.5  MM", "name": "Height Of Wires 16.5 +/- 0.5  MM" },
                        { "label": "Sleeves  Length T1(+VE)=WHITE  &  T2 (-VE)=BLUE 31 + 1 / - 0.00 cm  each", "name": "Sleeves  Length T1(+VE)=WHITE  &  T2 (-VE)=BLUE 31 + 1 / - 0.00 cm  each" }
                    ]
                },
                {
                    "name": "TIP HOLDER- SUYASH.",
                    "code": "FM002",
                    "fields": [
                        { "label": "Height Of Nylon 20 MM +/- 0.5 MM.", "name": "Height Of Nylon 20 MM +/- 0.5 MM." },
                        { "label": "Height Of Copper Pipe 9 MM +/- 0.2 MM.", "name": "Height Of Copper Pipe 9 MM +/- 0.2 MM." },
                        { "label": "Height Of Copper Rod 11 MM +/- 0.2 MM.", "name": "Height Of Copper Rod 11 MM +/- 0.2 MM." },
                         { "label": "Checking by vender vendor test certificate", "name": "Checking by vender vendor test certificate" }
                    ]
                },
                {
                    "name": "CUP STAND   - SQR. CUPS",
                    "code": "FM003",
                    "fields": [
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                       
                    ]
                },
                {
                    "name": "TOP CYLINDER DSNU 25_40",
                    "code": "FM004",
                    "fields": [
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                       
                    ]
                },
                {
                    "name": "CIRCULAR CUTTER 5 INCH FOR TUBE CUTTING",
                    "code": "FM005",
                    "fields": [
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" },
                        { "label": " checking by vendor vendor test certificate", "name": " checking by vendor vendor test certificate" }
                        
                    ]
                },
                {
                    "name": "ALLOY WIRE",
                    "code": "FM006",
                    "fields": [
                        { "label": "DRAWING 1 NO DRG/01", "name": "DRAWING 1 NO DRG/01" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                      
                    ]
                },
                {
                    "name": "CUP STAND FOR NEW SUPER CUP",
                    "code": "FM008",
                    "fields": [
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" },
                        { "label": "DRAWING 1 NO DRG/01", "name": "DRAWING 1 NO DRG/01" }
                        
                    ]
                },
                {
                    "name": "TIP HOLDER  CR-AL-CERAMIC",
                    "code": "FM009",
                    "fields": [
                        { "label": "HEIGHT OF NYLON 20 MM  +/- 0.5MM", "name": "HEIGHT OF NYLON 20 MM  +/- 0.5MM" },
                        { "label": "HEIGHT OF COPPER PIPE 9 MM +/- 0.2 MM", "name": "HEIGHT OF COPPER PIPE 9 MM +/- 0.2 MM" },
                        { "label": "HEIGHT OF COPPER 11 MM +/- 0.2MM", "name": "HEIGHT OF COPPER 11 MM +/- 0.2MM" },
                        { "label": " Checking by vendor vendor test certificate", "name": " Checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "COPPER WIRE",
                    "code": "FM010",
                    "fields": [
                        { "label": "LENGTH OF PIPE 10 FT", "name": "LENGTH OF PIPE 10 FT" },
                        { "label": " LENGTH AT CABLE 20 MTR", "name": " LENGTH AT CABLE 20 MTR" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "ALLOY SCRAP",
                    "code": "FM011",
                    "fields": [
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                       
                    ]
                },
                {
                    "name": "CUP HOLDER - SUPER CUP",
                    "code": "FM012",
                    "fields": [
                        { "label": "DISTANCE BETWEEN 2 WIRES:- 14.5 + 0.1 MM", "name": "DISTANCE BETWEEN 2 WIRES:- 14.5 + 0.1 MM" },
                        { "label": "HEIGHT OF WIRES 16.5 +/- 0.5 MM", "name": "HEIGHT OF WIRES 16.5 +/- 0.5 MM" },
                        { "label": "HEIDHT OF WIRES 16.5 +/- 0.5 MM", "name": "HEIDHT OF WIRES 16.5 +/- 0.5 MM" },
                        { "label": "SLEEVES:- T1 (+VE)=WHITE & T2 (-VE)=BLUE  290  mm  +/- 5 .00 mm", "name": "SLEEVES:- T1 (+VE)=WHITE & T2 (-VE)=BLUE  290  mm  +/- 5 .00 mm" }
                    ]
                },
                {
                    "name": "CUP STAND - SUPER CUP",
                    "code": "FM013",
                    "fields": [
                        { "label": "CHECKING BY VENDER VENDER TEST CERTIFICATE", "name": "CHECKING BY VENDER VENDER TEST CERTIFICATE" },
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" }
                        
                    ]
                },
                {
                    "name": "Buzzer Card for CSA",
                    "code": "FM014",
                    "fields": [
                        { "label": "make FLUXION PROCESS SOLUTIONS", "name": "make FLUXION PROCESS SOLUTIONS" }
                       
                    ]
                },
                {
                    "name": "TIP HOLDER - S & P",
                    "code": "FM015",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:- OK", "name": "ONLY QTY. TO BE CHECKING:- OK" },
                        { "label": "CHECKING BY VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "CARBON BRUSH FOR BOSCH 7 INCH MACHINE",
                    "code": "FM016",
                    "fields": [
                        { "label": "Distance Between 2 Wires 22.3 +0.2 MM", "name": "Distance Between 2 Wires 22.3 +0.2 MM" },
                        { "label": "Height Of Wires 16.5 +/- 0.5 mm", "name": "Height Of Wires 16.5 +/- 0.5 mm" },
                        { "label": "Height Of Wires 16.5 +/- 0.5 mm", "name": "Height Of Wires 16.5 +/- 0.5 mm" },
                        { "label": "Sleeves Length:- T1(+VE)=WHITE  & T2(-VE)=BLUE  31 + 1 / - 0.00  cm  each", "name": "Sleeves Length:- T1(+VE)=WHITE  & T2(-VE)=BLUE  31 + 1 / - 0.00  cm  each" }
                    ]
                },
                {
                    "name": "CARBON BRUSH FOR BOSCH 5 INCH MACHINE",
                    "code": "FM017",
                    "fields": [
                        { "label": "Drawing 1 NO DRG/01", "name": "Drawing 1 NO DRG/01" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                      
                    ]
                },
                {
                    "name": "CUP HOLDER -NEW SUPER",
                    "code": "FM020",
                    "fields": [
                        { "label": "DISTANCE BETWEEN 2 WIRE:- 18.5 MM +/- 0.1 MM", "name": "DISTANCE BETWEEN 2 WIRE:- 18.5 MM +/- 0.1 MM" },
                        { "label": "HEIGHT OF WIRES 16.5 MM +/- 0.5 MM", "name": "HEIGHT OF WIRES 16.5 MM +/- 0.5 MM" },
                        { "label": "HEIGHT OF WIRES 16.5 MM +/- 0.5MM", "name": "HEIGHT OF WIRES 16.5 MM +/- 0.5MM" },
                        { "label": "SLEEVES T1(+VE)=WHITE & T2 (-VE) = BLUE  290 MM +/- 5.00 MM", "name": "SLEEVES T1(+VE)=WHITE & T2 (-VE) = BLUE  290 MM +/- 5.00 MM" }
                    ]
                },
                {
                    "name": "DIGITAL TEMP. IND.-MICRO PORCESSOR BASED AND EHTERNE (LAN) ADAPTER 4'' DISPLAY",
                    "code": "FP001",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "DIGITAL TEMPRATURE INDICATER WIFI GATEWAY - MICROPROTABLE",
                    "code": "FP002",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "DIGITAL TEMPRATURE INDICATER- MICROPROTABLE",
                    "code": "FP003",
                    "fields": [
                        { "label": "Make TWINTECH  /  FLUXION PROCESS SOLUTIONS", "name": "Make TWINTECH  /  FLUXION PROCESS SOLUTIONS" },
                        { "label": "Drawing DRG/26", "name": "Drawing DRG/26" }
                        
                    ]
                },
                {
                    "name": "TEMP IND.WIFI GATEWAY - BOX",
                    "code": "FP004",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" },
                        { "label": "Drawing DRG/31", "name": "Drawing DRG/31" }
                        
                    ]
                },
                {
                    "name": "DIGITAL TEMPRATURE INDICATER-MICRO PORCESSOR BASED AND  -4'' DISPLAY",
                    "code": "FP005",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" },
                        { "label": " Drawing DRG/31", "name": " Drawing DRG/31" }
                       
                    ]
                },
                {
                    "name": "DIGITAL TEMPRATURE INDICATER -WI-FI /Portable Indicator (only)",
                    "code": "FP006",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" },
                        { "label": "Drawing DRG/26", "name": "Drawing DRG/26" }
                        
                    ]
                },
                {
                    "name": " 4 inch MICRO MAINS  MAIN CARD",
                    "code": "FP007",
                    "fields": [
                        { "label": "MAKE FLUXION", "name": "MAKE FLUXION" }
                        
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - MULTI USE NON SPLASH 10%",
                    "code": "FT001",
                    "fields": [
                        { "label": "Stamp On Ceramic Tube & Corrugated Sheet BLACK  10 %  STAMP", "name": "Stamp On Ceramic Tube & Corrugated Sheet BLACK  10 %  STAMP" },
                        { "label": "Paper Protection Cap YES", "name": "Paper Protection Cap YES" }
                        
                    ]
                },
                {
                    "name": "TEMPERATURE TIPS-CR-AL CERAMIC",
                    "code": "FT002",
                    "fields": [
                        { "label": "Paper Protection Cap YES", "name": "Paper Protection Cap YES" },
                        { "label": "Test Certificate YES", "name": "Test Certificate YES" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - CERAMIC - 13 %",
                    "code": "FT003",
                    "fields": [
                        { "label": "Stamp On Ceramic Tube & Corrugated Sheet RED  13%  STAMP", "name": "Stamp On Ceramic Tube & Corrugated Sheet RED  13%  STAMP" },
                        { "label": "Paper Protection Cap YES", "name": "Paper Protection Cap YES" },
                        { "label": "Test Certificate YES", "name": "Test Certificate YES" },
                        { "label": "Glass Tube U 45U", "name": "Glass Tube U 45U" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - MULTI USE NON SPLASH 13 % - 300 MM",
                    "code": "FT004",
                    "fields": [
                        { "label": "Stamp On Ceramic Tube & Corrugated Sheet RED  13%  STAMP", "name": "Stamp On Ceramic Tube & Corrugated Sheet RED  13%  STAMP" },
                        { "label": "Paper Protection Cap YES", "name": "Paper Protection Cap YES" },
                        { "label": "Test Certificate YES", "name": "Test Certificate YES" }
                    ]
                },
                {
                    "name": "S & P TIPS 2 FT - SUYASH",
                    "code": "FT005",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": " MDC Adequte", "name": " MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": " Test Certificate Yes", "name": " Test Certificate Yes" }
                    ]
                },
                {
                    "name": "TEMPERATURE TIPS - 900 MM S&P TIPS",
                    "code": "FT006",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "MULTI-USE TIPS 100 MM",
                    "code": "FT007",
                    "fields": [
                        { "label": "Stamp On Paper Tube Black 10% Stamp", "name": "Stamp On Paper Tube Black 10% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "S & P TIPS  1 FT - SUYASH 13% 0.04MM",
                    "code": "FT008",
                    "fields":[
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 150 mm +/- 5 mm", "name": "Paper Tube Length 150 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - Suyash S&P  BARE 1FT",
                    "code": "FT009",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 10 % S& P 600 MM  LONG WITH CAP",
                    "code": "FT010",
                    "fields":[
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 540 mm +/- 5 mm", "name": "Paper Tube Length 540 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "OXY PROBES",
                    "code": "FT011",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 150 mm +/- 5 mm", "name": "Paper Tube Length 150 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 13 % Suyash 3 FT LONG WITH CAP",
                    "code": "FT012",
                    "fields":[
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 820 mm +/- 5 mm", "name": "Paper Tube Length 820 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 1355 Suyash",
                    "code": "FT013",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 10 % ANTI  SPLASH  -600MM",
                    "code": "FT014",
                    "fields": [
                        { "label": "Stamp On Paper Tube Black 10% Stamp", "name": "Stamp On Paper Tube Black 10% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DSNU 16_80 FOR T1T2",
                    "code": "FT015",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Black 10% Stamp", "name": "Stamp On Paper Tube Black 10% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 13 % Suyash 1 FT LONG BARE",
                    "code": "FT016",
                    "fields":[
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO ADVU 20_20 FOR T1T2",
                    "code": "FT017",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 275 mm +/- 5 mm", "name": "Paper Tube Length 275 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 10 % S&P (850 MM TUBE WITH CAP) AZAROS",
                    "code": "FT018",
                    "fields": [
                        { "label": "Stamp On Paper Tube Black 10% Stamp", "name": "Stamp On Paper Tube Black 10% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 850 mm +/- 5 mm", "name": "Paper Tube Length 850 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 13% (SUYASH S& P) 1 FT (250 mm)  WITH CAPS",
                    "code": "FT019",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 250 mm +/- 5 mm", "name": "Paper Tube Length 250 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - 13 % 540 MM S & P TIPS",
                    "code": "FT020",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                       
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 540 mm +/- 5 mm", "name": "Paper Tube Length 540 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS -10 % TIP PACKING  S&P (540 MM TUBE WITH CAP) TRABUCATTO",
                    "code": "FT021",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 540 mm +/- 5 mm", "name": "Paper Tube Length 540 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPERATURE TIPS - 1335 (Suyash S&P)   PAPER",
                    "code": "FT022",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS -LD 13%",
                    "code": "FT023",
                    "fields": [
                        { "label": "STAMP ON CERAMIC & COROGETED SHEETS:- 13% RED STAMP", "name": "STAMP ON CERAMIC & COROGETED SHEETS:- 13% RED STAMP" },
                        { "label": "PAPER PROTECTION CAP YES", "name": "PAPER PROTECTION CAP YES" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" },
                        { "label": "GLASS TUBE U 37.5 U", "name": "GLASS TUBE U 37.5 U" }
                    ]
                },
                {
                    "name": "TEMPERATURE TIPS  - 10% ANTI SPLASH 300MM",
                    "code": "FT024",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS 1324 M.CAP 1 FT",
                    "code": "FT025",
                    "fields": [
                        { "label": "STAMP ON CERAMIC & COROGETED SHEETS:- 13% RED STAMP", "name": "STAMP ON CERAMIC & COROGETED SHEETS:- 13% RED STAMP" },
                        { "label": "PAPER PROTECTION CAP YES", "name": "PAPER PROTECTION CAP YES" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                        
                    ]
                },
                {
                    "name": "TEMP.TIPS SUYASH 1335 TIPS",
                    "code": "FT026",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "S & P TYPE B  TIP PACKING 3 FT",
                    "code": "FT027",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "SAMPLER - 200MM",
                    "code": "FT028",
                    "fields": [
                        { "label": "FITTING NO GAP PAPER TUBE & SAMPLAR", "name": "FITTING NO GAP PAPER TUBE & SAMPLAR" }
                       
                    ]
                },
                {
                    "name": "SAMPLER - 600 MM",
                    "code": "FT029",
                    "fields": [
                        { "label": "FITTING NO GAP PAPER TUBE & SAMPLAR", "name": "FITTING NO GAP PAPER TUBE & SAMPLAR" }
                       
                    ]
                },
                {
                    "name": "S & P TYPE B TIPS PACKING 1200 MM",
                    "code": "FT030",
                    "fields":  [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "S & P TYPE B TIPS PACKING  2 FT",
                    "code": "FT031",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - (SUYASH S & P) TIPS-3 FT (750 mm)",
                    "code": "FT032",
                    "fields": [
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                         { "label": "PAPER TUBE LENGTH 750 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 750 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS -10 % TIP PACKING  S&P (540 MM TUBE WITH CAP) AZAROS",
                    "code": "FT035",
                    "fields": [
                        { "label": "Stamp On Paper Tube Black 10% Stamp", "name": "Stamp On Paper Tube Black 10% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                        { "label": "PAPER TUBE LENGTH 540 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 540 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "S & P  13%  TIP PACKING  3  FT",
                    "code": "FT038",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                         { "label": "PAPER TUBE LENGTH 890 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 890 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - CERAMIC 10 %",
                    "code": "FT039",
                    "fields": [
                        { "label": "STAMP ON CERAMIC & COROGETED SHEETS:- 10% Black STAMP", "name": "STAMP ON CERAMIC & COROGETED SHEETS:- 10% Black STAMP" },
                        { "label": "PAPER PROTECTION CAP YES", "name": "PAPER PROTECTION CAP YES" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                        
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS (SUYASH S & P) TIPS -2 FT (500 mm)",
                    "code": "FT040",
                    "fields": [
                        { "label": "M D C ADEQUATE", "name": "M D C ADEQUATE" },
                        { "label": " PAPER TUBE LENGTH 500 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 500 MM +/- 5 MM" },
                        { "label": " FITTING NO GAP PAPER TUBE & CASTING", "name": " FITTING NO GAP PAPER TUBE & CASTING" },
                        { "label": " TEST CERTIFICATE YES", "name": " TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "Temperature Tips - (Suyash S& P)13 % TIP PACKING 1000MM",
                    "code": "FT042",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                         { "label": "PAPER TUBE LENGTH 1000 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 1000 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "Temperature Tips - S & P 4 Ft - 13%",
                    "code": "FT043",
                    "fields":[
                        { "label": "M D C ADEQUATE", "name": "M D C ADEQUATE" },
                        { "label": " PAPER TUBE LENGTH 1160 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 1160 MM +/- 5 MM" },
                        { "label": " FITTING NO GAP PAPER TUBE & CASTING", "name": " FITTING NO GAP PAPER TUBE & CASTING" },
                        { "label": " TEST CERTIFICATE YES", "name": " TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS -10% TIPS PACKING  S&P (400 MM TUBE WITH CAP)",
                    "code": "FT045",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                         { "label": "PAPER TUBE LENGTH 400 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 400 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "SAMPLER- 900 MM",
                    "code": "FT050",
                    "fields": [
                        { "label": "FITTING NO GAP PAPER TUBE & SAMPLAR", "name": "FITTING NO GAP PAPER TUBE & SAMPLAR" }
                       
                    ]
                },
                {
                    "name": "S & P (B TYPE) TIP PACKING  1800 MM",
                    "code": "FT052",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "Araldite Adequte", "name": "Araldite Adequte" },
                         { "label": "PAPER TUBE LENGTH 1475 MM +/- 5 MM", "name": " PAPER TUBE LENGTH 1475 MM +/- 5 MM" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                       
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS 1 FT - 10 % 0.03mm Suyash S&P",
                    "code": "FT053",
                    "fields": [
                        { "label": "Stamp On Paper Tube Red 13% Stamp", "name": "Stamp On Paper Tube Red 13% Stamp" },
                        { "label": " Fitting No gap", "name": " Fitting No gap" },
                        { "label": "MDC Adequte", "name": "MDC Adequte" },
                        { "label": "13'' Paper Tube Yes", "name": "13'' Paper Tube Yes" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Paper Tube Length 250 mm +/- 5 mm", "name": "Paper Tube Length 250 mm +/- 5 mm" }
                    ]
                },
                {
                    "name": "TEMPRATURE TIPS - NON SPLASH 10%",
                    "code": "FT060",
                    "fields": [
                        { "label": "CAP FITTING OK", "name": "CAP FITTING OK" }
                       
                    ]
                },
                {
                    "name": "395 * 335 * 285  OLD CSA 12 KEY INNER BOX 15.5 * 13.5 * 11",
                    "code": "PA001",
                    "fields": [
                        { "label": "Length 395 MM +/- 5 MM", "name": "Length 395 MM +/- 5 MM" },
                        { "label": "Width 335 MM +/- 5 MM", "name": "Width 335 MM +/- 5 MM" },
                        { "label": "Height 285 MM +/- 5 MM", "name": "Height 285 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "490 * 290 * 470 OLD CSA OUTER BOX",
                    "code": "PA002",
                    "fields": [
                        { "label": "Length 490 MM +/- 5 MM", "name": "Length 490 MM +/- 5 MM" },
                        { "label": "Width 290 MM +/- 5 MM", "name": "Width 290 MM +/- 5 MM" },
                        { "label": "Height 470 MM +/- 5 MM", "name": "Height 470 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "390 * 215 * 280 NEW CSA INNER BOX",
                    "code": "PA003",
                    "fields": [
                        { "label": "Length 390 MM +/- 5 MM", "name": "Length 390 MM +/- 5 MM" },
                        { "label": "Width 220 MM +/- 5 MM", "name": "Width 220 MM +/- 5 MM" },
                        { "label": "Height 280 MM +/- 5 MM", "name": "Height 280 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "500 * 310 * 485  NEW CSA OUTER BOX",
                    "code": "PA004",
                    "fields": [
                        { "label": "Length 500 MM +/- 5 MM", "name": "Length 500 MM +/- 5 MM" },
                        { "label": "Width 310 MM +/- 5 MM", "name": "Width 310 MM +/- 5 MM" },
                        { "label": "Height 485 MM +/- 5 MM", "name": "Height 485 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" }
                    ]
                },
                {
                    "name": "550 * 260 * 320 (4 inch MAINS) / BIG DISPLAY BOX",
                    "code": "PA005",
                    "fields":[
                        { "label": "Length 550 MM +/- 5 MM", "name": "Length 550 MM +/- 5 MM" },
                        { "label": "Width 260 MM +/- 5 MM", "name": "Width 260 MM +/- 5 MM" },
                        { "label": "Height 320 MM +/- 5 MM", "name": "Height 320 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "440 * 260 * 300  Micro Mains Temp. Indicator 2'' ",
                    "code": "PA006",
                    "fields": [
                        { "label": "Length 440 MM +/- 5 MM", "name": "Length 440 MM +/- 5 MM" },
                        { "label": "Width 260 MM +/- 5 MM", "name": "Width 260 MM +/- 5 MM" },
                        { "label": "Height 300 MM +/- 5 MM", "name": "Height 300 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "495 * 295 * 520 LCD CSA Outer 19.5*11.5*20.5",
                    "code": "PA007",
                    "fields": [
                        { "label": "Length 495 MM +/- 5 MM", "name": "Length 495 MM +/- 5 MM" },
                        { "label": "Width 295 MM +/- 5 MM", "name": "Width 295 MM +/- 5 MM" },
                        { "label": "Height 520 MM +/- 5 MM", "name": "Height 520 MM +/- 5 MM" },
                        
                    ]
                },
                {
                    "name": "390 * 230 * 315 LCD CSA Inner 15.5 * 9 * 12.5",
                    "code": "PA008",
                    "fields": [
                        { "label": "Length 390 MM +/- 5 MM", "name": "Length 390 MM +/- 5 MM" },
                        { "label": "Width 230 MM +/- 5 MM", "name": "Width 230 MM +/- 5 MM" },
                        { "label": "Height 315 MM +/- 5 MM", "name": "Height 315 MM +/- 5 MM" },
                        
                    ]
                },
                {
                    "name": "53 * 17 * 34 SPECTRO DISPLAY BOX",
                    "code": "PA009",
                    "fields": [
                        { "label": "LENGTH 53'' +/-  0.5 ", "name": "LENGTH 53'' +/-  0.5 " },
                        { "label": " WIDTH 17'' +/-  0.5 ", "name": " WIDTH 17'' +/-  0.5 " },
                        { "label": "HEIGHT 34'' +/-  0.5 ", "name": "HEIGHT 34'' +/-  0.5 " },
                         { "label": "5 ply Corrogated Boxes Paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes Paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "28 * 14 * 25 SPECTRO DISPLAY BOX",
                    "code": "PA010",
                    "fields": [
                        { "label": "LENGTH  28'' +/-  0.5 ", "name": "LENGTH 53'' +/-  0.5 " },
                        { "label": " WIDTH 14'' +/-  0.5 ", "name": " WIDTH 17'' +/-  0.5 " },
                        { "label": "HEIGHT 25'' +/-  0.5 ", "name": "HEIGHT 34'' +/-  0.5 "},
                         { "label": "5 ply Corrogated Boxes Paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes Paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "400 mm*200 mm 170 mm  CARBON CUP - NEW SUPER CUP BOX",
                    "code": "PC001",
                    "fields": [
                        { "label": "LENGTH 400 MM +/- 5 MM", "name": "LENGTH 400 MM +/- 5 MM" },
                        { "label": "WIDTH 200 MM +/- 5 MM", "name": "WIDTH 200 MM +/- 5 MM" },
                        { "label": "HEIGHT 170 MM +/- 5MM", "name": "HEIGHT 170 MM +/- 5MM" },
                         { "label": "PLAY 5", "name": "PLAY 5" }
                    ]
                },
                {
                    "name": "PARTITIONS",
                    "code": "PC003",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING:- YES", "name": "ONLY QTY TO BE CHECKING:- YES" }
                       
                    ]
                },
                {
                    "name": "DISPLAY CARD MICRO MAINS 2",
                    "code": "PC004",
                    "fields": [
                        { "label": "TEST CERTIFICATE MANAFACTURE'S TC", "name": "TEST CERTIFICATE MANAFACTURE'S TC" }
                       
                    ]
                },
                {
                    "name": "CAP PRESSING MACHINE-RI",
                    "code": "PC005",
                    "fields": [
                        { "label": "LENGTH * WIDTH * HEIGHT:- 11.5''*11.5''*8.5'' +/- 0.25", "name": "LENGTH * WIDTH * HEIGHT:- 11.5''*11.5''*8.5'' +/- 0.25" },
                        { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "OVEN MACHINE-RI",
                    "code": "PC006",
                    "fields": [
                        { "label": "LENGTH * WIDTH 11.5'' *11.5'' +/- 0.25", "name": "LENGTH * WIDTH 11.5'' *11.5'' +/- 0.25" },
                        { "label": "PLY 3", "name": "PLY 3" }
                        
                    ]
                },
                {
                    "name": "440 mm*230 mm* 180 mm  SUPER (R) CUP BOX",
                    "code": "PC007",
                    "fields": [
                        { "label": "LENGTH 440 +/- 5 MM", "name": "LENGTH 440 +/- 5 MM" },
                        { "label": " WIDTH 230 +/- 5 MM", "name": " WIDTH 230 +/- 5 MM" },
                        { "label": "HEIGHT 180 +/- 5 MM", "name": "HEIGHT 180 +/- 5 MM" },
                         { "label": "PLAY 5", "name": "PLAY 5" }
                    ]
                },
                {
                    "name": "355 *265 *250  TIPS HEAD PACKING BOX",
                    "code": "PC008",
                    "fields": [
                        { "label": "LENGTH 355 mm +/- 5 mm", "name": "LENGTH 355 mm +/- 5 mm" },
                        { "label": " WIDHT 265 mm +/- 5 mm", "name": " WIDHT 265 mm +/- 5 mm" },
                        { "label": "HEIGHT 250 mm +/- 5 mm", "name": "HEIGHT 250 mm +/- 5 mm" },
                        { "label": " PLY 5", "name": " PLY 5" },
                        { "label": " 5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 2 side printing" }
                    ]
                },
                {
                    "name": "290 * 290* 290  SQUARE CUP ( 100 NOS ) BOX",
                    "code": "PC009",
                    "fields": [
                        { "label": "Lenth 290 MM +/-5 mm", "name": "Lenth 290 MM +/-5 mm" },
                        { "label": " Width 290 MM+/-5 mm", "name": " Width 290 MM+/-5 mm" },
                        { "label": " Height 290 MM+/-5 mm", "name": " Height 290 MM+/-5 mm" },
                        { "label": " Ply 5", "name": " Ply 5" },
                        { "label": " 5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 3 ply 4 plate 3 ply four5*5 partition and 2 side printing", "name": "5 ply Corrogated Boxes paper quality 16 BF 100 gsm kraft.with 3 ply 4 plate 3 ply four5*5 partition and 2 side printing" }
                    ]
                },
                {
                    "name": "PLATE",
                    "code": "PC010",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING:- OK", "name": "ONLY QTY TO BE CHECKING:- OK" }
                        
                    ]
                },
                {
                    "name": "SIDE  TOOL TYPE 1",
                    "code": "PT001",
                    "fields": [
                        { "label": "Length 355 mm +/- 5 mm", "name": "Length 355 mm +/- 5 mm" },
                        { "label": "Width 355 mm +/- 5 mm", "name": "Width 355 mm +/- 5 mm" },
                        { "label": " Height 345 mm +/- 5 mm", "name": " Height 345 mm +/- 5 mm" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 Ply Corrogated Boxes paper quality 16 BF 140 gsm kraft with 3 ply one plate and 2 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 140 gsm kraft with 3 ply one plate and 2 side printing" },
                        { "label": " Box Weight 900 GMS", "name": " Box Weight 900 GMS" }
                    ]
                },
                {
                    "name": "SALZER RELAY & RELAY BASE FOR T1T2",
                    "code": "PT002",
                    "fields":[
                        { "label": "Length 300 mm +/- 5 mm", "name": "Length 300 mm +/- 5 mm" },
                        { "label": "Width 300 mm +/- 5 mm", "name": "Width 300 mm +/- 5 mm" },
                        { "label": " Height 320 mm +/- 5 mm", "name": " Height 320 mm +/- 5 mm" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 Ply Corrogated Boxes paper quality 16 BF 140 gsm kraft with 3 ply one plate and 2 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 140 gsm kraft with 3 ply one plate and 2 side printing" },
                        { "label": "Box Weight 690 GMS", "name": " Box Weight 690 GMS" }
                    ]
                },
                {
                    "name": "13 % Rhoudium wire",
                    "code": "PT003",
                    "fields": [
                        { "label": "Length 9.25'' +/- 0.25", "name": "Length 9.25'' +/- 0.25" },
                        { "label": "Width 9.25'' 0.25", "name": "Width 9.25'' 0.25" },
                        { "label": "Height 23'' + 2", "name": "Height 23'' + 2" },
                        { "label": "Ply 5", "name": "Ply 5" }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP - MI CABLE",
                    "code": "PT004",
                    "fields": [
                        { "label": "ONLY OTY.TO BE CHECKING:- OK", "name": "ONLY OTY.TO BE CHECKING:- OK" }
                      
                    ]
                },
                {
                    "name": "OXYPROBE  HOLDER",
                    "code": "PT005",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:- YES", "name": "ONLY QTY.TO BE CHECKING:- YES" },
                        { "label": "CHECKING BY VENDER TEST CERTIFICATE", "name": "CHECKING BY VENDER TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "AIR CYLINDER ADVC 16_5 FOR T1T2",
                    "code": "PT006",
                    "fields": [
                        { "label": "Length 255 MM +/- 5 MM", "name": "Length 255 MM +/- 5 MM" },
                        { "label": "Width 255 MM +/- 5 MM", "name": "Width 255 MM +/- 5 MM" },
                        { "label": "Height 140 MM +/- 5 MM", "name": "Height 140 MM +/- 5 MM" },
                         { "label": "Ply 3 OR 5", "name": "Ply 3 OR 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 4 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 4 side printing" }
                    ]
                },
                {
                    "name": "280 mm*280 mm*165 mm  TEMP. TIPS - CERAMIC OUTER BOX",
                    "code": "PT007",
                    "fields": [
                        { "label": "Length 280 MM +10MM - 5 MM", "name": "Length 280 MM +10MM - 5 MM" },
                        { "label": "Width 280 MM +10MM - 5 MM", "name": "Width 280 MM +10MM - 5 MM" },
                        { "label": "Height 165 MM +15MM - 5 MM", "name": "Height 165 MM +15MM - 5 MM" },
                         { "label": "Ply 3 OR 5", "name": "Ply 3 OR 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 4 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 4 side printing" }
                    ]
                },
                {
                    "name": "260 mm*260 mm*150 mm TEMP. TIPS - NEW CERAMIC - 50 NOS",
                    "code": "PT008",
                    "fields": [
                        { "label": "Length 260 MM +/- 5 MM", "name": "Length 260 MM +/- 5 MM" },
                        { "label": "Width 260 MM +/- 5 MM", "name": "Width 260 MM +/- 5 MM" },
                        { "label": "Height 150 MM +/- 5 MM", "name": "Height 150 MM +/- 5 MM" },
                         { "label": "Ply 5", "name": "Ply 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 200 gsm kraft with 4 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 200 gsm kraft with 4 side printing" }
                    ]
                },
                {
                    "name": "AIR CYLINDER ADVC 32_5 INT THRD. FOR T1T2",
                    "code": "PT009",
                    "fields": [
                        { "label": "Length 115 mm + 5 mm", "name": "Length 115 mm + 5 mm" },
                        { "label": "Width 115 mm + 5 mm", "name": "Width 115 mm + 5 mm" },
                        { "label": "Ply 2", "name": "Ply 2" },
                        { "label": "2 Ply Corrogated sheets paper quality 16 BF 100 gsm kraft without printing", "name": " 2 Ply Corrogated sheets paper quality 16 BF 100 gsm kraft without printing" }
                    ]
                },
                {
                    "name": "115 mm*125 mm RAPPER FOR CERAMIC TIPS",
                    "code": "PT010",
                    "fields": [
                        { "label": "Length 115 mm +/- 5 mm", "name": "Length 115 mm +/- 5 mm" },
                        { "label": "Width 125 mm +/- 5 mm", "name": "Width 125 mm +/- 5 mm" },
                        { "label": "Ply 2", "name": "Ply 2" },
                        { "label": "2 Ply Corrogated sheets paper quality 16 BF 100 gsm kraft without printing", "name": " 2 Ply Corrogated sheets paper quality 16 BF 100 gsm kraft without printing" }
                    ]
                },{
                    "name": "SEALING MOTOR & DRIVE 20 KG/CM",
                    "code": "PT011",
                    "fields": [
                        { "label": "LENGTH 14'' +/-  0.25", "name": "LENGTH 14'' +/-  0.25" },
                        { "label": "WIDTH 14'' +/-0.25", "name": "WIDTH 14'' +/-0.25" },
                        { "label": "HEIGHT 8.5'' +/-0.25", "name": "HEIGHT 8.5'' +/-0.25" },
                         { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "Platinum Wire 0.03 mm",
                    "code": "PT012",
                    "fields": [
                        { "label": "LENGTH 215 mm +/- 5 mm", "name": "LENGTH 215 mm +/- 5 mm" },
                        { "label": "WIDTH 215 mm +/- 5 mm", "name": "WIDTH 215 mm +/- 5 mm" },
                        { "label": "HEIGHT 1140 mm + 85 mm  - 5 mm", "name": "HEIGHT 1140 mm + 85 mm  - 5 mm" },
                        { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "TUBE LOADING CONVEYOR -",
                    "code": "PT013",
                    "fields": [
                        { "label": "LENGTH 9.25'' +/-0.25", "name": "LENGTH 9.25'' +/-0.25" },
                        { "label": "WIDTH 9.25'' +/-0.25", "name": "WIDTH 9.25'' +/-0.25" },
                        { "label": "HEIGHT 37'' +/-0.25", "name": "HEIGHT 37'' +/-0.25" },
                        { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "GRIPPER TYPE 01 FOR T1T2",
                    "code": "PT014",
                    "fields": [
                        { "label": "Length 255 MM +/- 5 MM", "name": "Length 255 MM +/- 5 MM" },
                        { "label": "Width 255 MM +/- 5 MM", "name": "Width 255 MM +/- 5 MM" },
                        { "label": "Height 635 MM +/- 5 MM", "name": "Height 635 MM +/- 5 MM" },
                         { "label": "Ply 5", "name": "Ply 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 3 ply one plate and  2 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 3 ply one plate and  2 side printing" }
                    ]
                },
                {
                    "name": "PERISTALIC PUMP SPRING",
                    "code": "PT015",
                    "fields": [
                        { "label": "LENGTH 13'' +/- 0.25", "name": "LENGTH 13'' +/- 0.25" },
                        { "label": "WIDTH 13'' +/- 0.25", "name": "WIDTH 13'' +/- 0.25" },
                        { "label": "HEIGHT 6 +/- 0.25", "name": "HEIGHT 6 +/- 0.25" },
                         { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "GRIPPER SET TYPE 2 FOR T1T2",
                    "code": "PT016",
                    "fields":  [
                        { "label": "Length 300 MM +/- 5 MM", "name": "Length 300 MM +/- 5 MM" },
                        { "label": "Width 300 MM +/- 5 MM", "name": "Width 300 MM +/- 5 MM" },
                        { "label": "Height 585 MM +/- 5 MM", "name": "Height 585 MM +/- 5 MM" },
                         { "label": "Ply 5", "name": "Ply 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft without printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft without printing" }
                    ]
                },
                {
                    "name": "310*190*110  CORRUGATED Trey",
                    "code": "PT018",
                    "fields": [
                        { "label": "LENGTH 310 +/- 5mm", "name": "LENGTH 310 +/- 5mm" },
                        { "label": "WIDTH 190 +/- 5mm", "name": "WIDTH 190 +/- 5mm" },
                        { "label": "HEIGHT 110 +/- 5mm", "name": "HEIGHT 110 +/- 5mm" },
                         { "label": "PLY 5", "name": "PLY 5" }
                    ]
                },
                {
                    "name": "ST-2 Machine",
                    "code": "PT019",
                    "fields": [
                        { "label": "Lenth 220 MM +/- 5 MM", "name": "Lenth 220 MM +/- 5 MM" },
                        { "label": "Width 220 MM +/- 5 MM", "name": "Width 220 MM +/- 5 MM" },
                        { "label": "Height 1225 MM +/- 5 MM", "name": "Height 1225 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" }
                    ]
                },
                {
                    "name": "300*180*100  CORRUGATED Trey",
                    "code": "PT020",
                    "fields":  [
                        { "label": "Lenth 300 MM +/- 5 MM", "name": "Lenth 300 MM +/- 5 MM" },
                        { "label": "Width 180 MM +/- 5 MM", "name": "Width 180 MM +/- 5 MM" },
                        { "label": "Height 100 MM +/- 5 MM", "name": "Height 100 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" }
                    ]
                },
                {
                    "name": "CA25R cement Alcoa-RI",
                    "code": "PT021",
                    "fields":[
                        { "label": "Lenth 295 MM +/- 5 MM", "name": "Lenth 295 MM +/- 5 MM" },
                        { "label": "Width 280 MM +/- 5 MM", "name": "Width 280 MM +/- 5 MM" },
                        { "label": "Height 100 MM +/- 5 MM", "name": "Height 100 MM +/- 5 MM" }
                       
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DSNU 20_10 FOR T1T2",
                    "code": "PT022",
                    "fields": [
                        { "label": "Length 255 MM +/- 5 MM", "name": "Length 255 MM +/- 5 MM" },
                        { "label": "Width 255 MM +/- 5 MM", "name": "Width 255 MM +/- 5 MM" },
                        { "label": "Height 345 MM +/- 5 MM", "name": "Height 345 MM +/- 5 MM" },
                         { "label": "Ply 5", "name": "Ply 5" },
                          { "label": "5 Ply Corrogated Boxes paper quality 16 BF 140 gsm kraft with 3 ply plate and 2 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 100 gsm kraft with 3 ply plate and 2 side printing" },
                          { "label": " Box Weight 560 Gms", "name": " Box Weight 560 Gms" }
                    ]
                },
                {
                    "name": "355 mm*180 mm*245 mm  TEMP. TIPS - CERAMIC BOX -100 NOS",
                    "code": "PT026",
                    "fields": [
                        { "label": "Length 355 MM +/- 5 MM", "name": "Length 355 MM +/- 5 MM" },
                        { "label": "Width 180 MM +/- 5 MM", "name": "Width 180 MM +/- 5 MM" },
                        { "label": "Height 245 MM +/- 5 MM", "name": "Height 245 MM +/- 5 MM" },
                        { "label": "Ply 5", "name": "Ply 5" },
                        { "label": "5 Ply Corrogated Boxes paper quality 16 BF 200 gsm kraft with 4 side printing", "name": "5 Ply Corrogated Boxes paper quality 16 BF 200 gsm kraft with 4 side printing" }
                    ]
                },
                {
                    "name": "CARD SETS FOR CSA III",
                    "code": "RA001",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "CARD SETS FOR OXYLAB",
                    "code": "RA002",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "CARD SETS FOR -ONLINE ONE WAY",
                    "code": "RA003",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "Spare Cards For CSA",
                    "code": "RA004",
                    "fields":  [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "AL. SUB RACK FOR CSA ONLINE",
                    "code": "RA005",
                    "fields": [
                        { "label": "LENGTH 340 MM +/- 5MM", "name": "LENGTH 340 MM +/- 5MM" },
                        { "label": "WIDTH 275 MM +/- 5MM", "name": "WIDTH 275 MM +/- 5MM" },
                        { "label": "HEIGHT 220 MM +/- 5 MM", "name": "HEIGHT 220 MM +/- 5 MM" },
                         { "label": "SCRATCH  PROOF FINISH", "name": "SCRATCH  PROOF FINISH" },
                          { "label": " AS PER SAMPLE NILL", "name": " AS PER SAMPLE NILL" },
                          { "label": " checking by vendor shreya system", "name": " checking by vendor shreya system" }
                    ]
                },
                {
                    "name": "ALU. SUB RACKS FOR CSA II",
                    "code": "RA006",
                    "fields":  [
                        { "label": "LENGTH 340 MM +/- 5MM", "name": "LENGTH 340 MM +/- 5MM" },
                        { "label": "WIDTH 275 MM +/- 5MM", "name": "WIDTH 275 MM +/- 5MM" },
                        { "label": "HEIGHT 220 MM +/- 5 MM", "name": "HEIGHT 220 MM +/- 5 MM" },
                         { "label": "SCRATCH  PROOF FINISH", "name": "SCRATCH  PROOF FINISH" },
                          { "label": "AS PER SAMPLE NILL", "name": " AS PER SAMPLE NILL" },
                          { "label": "checking by vendor fluxion process sol.", "name": "checking by vendor fluxion process sol." }
                    ]
                },
                {
                    "name": "HOOTER -SUPRONICS",
                    "code": "RA007",
                    "fields": [
                        { "label": "Voltage Buzzer= 230 vac", "name": "Voltage Buzzer= 230 vac" },
                        { "label": "Make Dispotronics make", "name": "Make Dispotronics make" },
                        { "label": " checking by  R & d R & D' s Norms", "name": " checking by  R & d R & D' s Norms" }
                    ]
                },
                {
                    "name": "STABILIZERS",
                    "code": "RA008",
                    "fields": [
                        { "label": "Make V-GUARD", "name": "Make V-GUARD" },
                        { "label": "Min. & Max .Cut Off Voltage 165 V Ac,280 V Ac.", "name": " Min. & Max .Cut Off Voltage 165 V Ac,280 V Ac." },
                        { "label": "Min.& Max. O/P V/Boost Mode 250 V Ac,250 V Ac", "name": "Min.& Max. O/P V/Boost Mode 250 V Ac,250 V Ac" },
                        { "label": "Min O/P V/Normal Mode 250 V  Ac,250 V Ac", "name": "Min O/P V/Normal Mode 250 V  Ac,250 V Ac" },
                        { "label": "Min O/P V/Buck Mode 250 V Ac,250 V Ac.", "name": "Min O/P V/Buck Mode 250 V Ac,250 V Ac." },
                        { "label": "Time Delay. 3-5 SEC", "name": " Time Delay. 3-5 SEC" },
                        { "label": "checking by R & D R & D's Norms", "name": "checking by R & D R & D's Norms" }
                    ]
                },
                {
                    "name": "Wooden Cabinet Box For CSA LCD ONLINE",
                    "code": "RA009",
                    "fields": [
                        { "label": "Length 21''+/- 1/2", "name": "Length 21''+/- 1/2" },
                        { "label": " Width 15'' +/-1/2", "name": " Width 15'' +/-1/2" },
                        { "label": " Height 16'' +/-1/2", "name": " Height 16'' +/-1/2" },
                        { "label": "checking by R & D R & D 's Norms", "name": "checking by R & D R & D 's Norms" }
                    ]
                },
                {
                    "name": "Wooden Box For CSA - II",
                    "code": "RA010",
                    "fields": [
                        { "label": "Length 19''+/- 1/2", "name": "Length 19''+/- 1/2" },
                        { "label": " Width 10.5'' +/-1/2", "name": " Width 10.5'' +/-1/2" },
                        { "label": " Height 16'' +/-1/2", "name": " Height 16'' +/-1/2" },
                        { "label": "checking by R & D R & D 's Norms", "name": "checking by R & D R & D 's Norms" }
                    ]
                },
                {
                    "name": "CUP STAND SUPER YELLOW",
                    "code": "RA011",
                    "fields": [
                        { "label": "DRAWING DRG/01", "name": "DRAWING DRG/01" }
                    ]
                },
                {
                    "name": "ALU.SUB RACK MICRO MAINS",
                    "code": "RA012",
                    "fields": [
                        { "label": "LENGTH ", "name": "LENGTH " },
                        { "label": "WIDTH ", "name": "WIDTH " },
                        { "label": "HEIGHT ", "name": "HEIGHT " },
                         { "label": "SCRATCH  PROOF FINISH", "name": "SCRATCH  PROOF FINISH" },
                          { "label": "AS PER SAMPLE NILL", "name": " AS PER SAMPLE NILL" },
                          { "label": "checking by vendor fluxion process sol.", "name": "checking by vendor fluxion process sol." }
                    ]
                },
                {
                    "name": "ALU.SUB RACK MICRO MAINS - II LAN",
                    "code": "RA013",
                    "fields": [
                        { "label": "LENGTH 345 MM +/- 5MM", "name": "LENGTH 345 MM +/- 5MM" },
                        { "label": "WIDTH 150 MM +/- 5MM", "name": "WIDTH 150 MM +/- 5MM" },
                        { "label": "HEIGHT 220 MM +/- 5 MM", "name": "HEIGHT 220 MM +/- 5 MM" },
                         { "label": "SCRATCH  PROOF FINISH", "name": "SCRATCH  PROOF FINISH" },
                          { "label": "AS PER SAMPLE ok", "name": " AS PER SAMPLE ok" },
                          { "label": "checking by vendor fluxion process sol.", "name": "checking by vendor fluxion process sol." }
                    ]
                },
                {
                    "name": "FRONT PCB MICRO TEMP.",
                    "code": "RA015",
                    "fields": [
                        { "label": "Make FLUXION", "name": "Make FLUXION" }
                        
                    ]
                },
                {
                    "name": "SERVO STABILIZAR",
                    "code": "RA016",
                    "fields": [
                        { "label": "MAKE SANDEEP AGENCIES", "name": "MAKE SANDEEP AGENCIES" }
                        
                    ]
                },
                {
                    "name": "TRANSFORMER",
                    "code": "RA017",
                    "fields": [
                        { "label": "MAKE TWINTECH / FLUXION PROCESS SOLUTIONS", "name": "MAKE TWINTECH / FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "SIDE TOOL TYPE 2",
                    "code": "RA018",
                    "fields":  [
                        { "label": "MAKE FLUXION PROCESS SOLUTIONS", "name": "MAKE FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "CUP STAND NEW SUPER CUP YELLOW",
                    "code": "RA019",
                    "fields": [
                        { "label": "DRAWING DRG/01", "name": "DRAWING DRG/01" }
                        
                    ]
                },
                {
                    "name": "BOTTOM TOOL TYPE 2",
                    "code": "RA020",
                    "fields": [
                        { "label": "DRAWING DRG/01", "name": "DRAWING DRG/01" }
                        
                    ]
                },
                {
                    "name": "CARD SETS FOR Suyash - OXYLAB",
                    "code": "RA021",
                    "fields": [
                        { "label": "MAKE FLUXION PROCESS SOLUTIONS", "name": "MAKE FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "CARD SETS FOR Suyash online with cooling curve",
                    "code": "RA022",
                    "fields": [
                        { "label": "ACCEPATANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPATANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                      
                    ]
                },
                {
                    "name": "AL. SUB RACKS FOR LCD/Oxy Probe",
                    "code": "RA023",
                    "fields": [
                        { "label": "Only Qty Check", "name": "Only Qty Check" }
                       
                    ]
                },
                {
                    "name": "CARD SETS FOR  HDMI gateway CSA - III",
                    "code": "RA024",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" },
                        { "label": "As Per Drawing DRG 27 to DRG/30", "name": "As Per Drawing DRG 27 to DRG/30" }
                        
                    ]
                },
                {
                    "name": "CARD SETS FOR CSA MODEL IV ARM CARD (LCD ONLINE)",
                    "code": "RA026",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "CARD SETS FOR CSA MODEL IV MOTHER BOARD CARD (LCD ONLINE)",
                    "code": "RA027",
                    "fields":  [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "INTEL NUC7CJYSN CELERON PROCESSOR 64GB EMMC 4GB DDR4 WINDOWS 10",
                    "code": "RA028",
                    "fields": [
                        { "label": "ONLY QTY CHEK OK", "name": "ONLY QTY CHEK OK" }
                       
                    ]
                },
                {
                    "name": "LOGITECH K400 PLUS WIRELESS TOUCH KEYBOARD",
                    "code": "RA029",
                    "fields": [
                        { "label": "ONLY QTY CHEK OK", "name": "ONLY QTY CHEK OK" }
                       
                    ]
                },
                {
                    "name": "Accoset 50 fine",
                    "code": "RC001",
                    "fields": [
                        { "label": "CRACK TEST 500 CUP SHELL NO CRACK & GOOD STRENGTH", "name": "CRACK TEST 500 CUP SHELL NO CRACK & GOOD STRENGTH" },
                        { "label": "Make ACC", "name": "Make ACC" }
                        
                    ]
                },
                {
                    "name": "Resin Coated Sand  sampler",
                    "code": "RC002",
                    "fields": [
                        { "label": "Crach Test One day production & Check 10 sampler for crach & strength", "name": "Crach Test One day production & Check 10 sampler for crach & strength" },
                        { "label": "HTS-Kg/Cm2 AS PER CERTIFICATE", "name": "HTS-Kg/Cm2 AS PER CERTIFICATE" },
                        { "label": "Mesh-AFS AS PER CERTIFICATE", "name": "Mesh-AFS AS PER CERTIFICATE" },
                        { "label": "Test Certificate Check certifcate avaliability", "name": "Test Certificate Check certifcate avaliability" },
                        { "label": "Checking by SSK / AKK / BLL:- Sign on the bill", "name": "Checking by SSK / AKK / BLL:- Sign on the bill" }
                    ]
                },
                {
                    "name": "1275 mm Quartz Tube for Cup",
                    "code": "RC003",
                    "fields": [
                        { "label": "emp. Test Bend 50 U tubes to check sustainces to temp.", "name": "emp. Test Bend 50 U tubes to check sustainces to temp." },
                        { "label": "Inner Diameter 1.60 MM -0.1 MM", "name": "Inner Diameter 1.60 MM -0.1 MM" },
                        { "label": "Outer Diameter 3.0 MM +0.1 MM", "name": " Outer Diameter 3.0 MM +0.1 MM" },
                        { "label": "Length 1275 +/- 10 mm", "name": " Length 1275 +/- 10 mm" },
                        { "label": "Ends OK", "name": " Ends OK" },
                        { "label": "Check By Director sing.on the challon", "name": "Check By Director sing.on the challon" }
                    ]
                },
                {
                    "name": "Tellurium Powder - Powder",
                    "code": "RC004",
                    "fields": [
                        { "label": "Coating Test After Checking 1200 Cups", "name": "Coating Test After Checking 1200 Cups" },
                        { "label": "Feed Back Feedback 2 SR In writing", "name": "Feed Back Feedback 2 SR In writing" },
                        { "label": "Purity Min 99%", "name": "Purity Min 99%" },
                         { "label": "Flame Test Gas flame must be green", "name": "Flame Test Gas flame must be green" },
                        { "label": "Mesh-200 or finer", "name": "Mesh-200 or finer" },
                        { "label": "Checking by ssk Sign on challan", "name": "Checking by ssk Sign on challan" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DSNU 25_10 FOR ST02",
                    "code": "RC005",
                    "fields": [
                        { "label": "Purity Min 99%", "name": "Purity Min 99%" },
                        { "label": "Granual 2-6 mm", "name": "Granual 2-6 mm" },
                        { "label": "checking by ssk sing on the challan", "name": "checking by ssk sing on the challan" }
                    ]
                },
                {
                    "name": "T1 - 26 Guage -Spools",
                    "code": "RC006",
                    "fields": [
                        { "label": "Test Certificate Compare tc with earlier wire tc", "name": "Test Certificate Compare tc with earlier wire tc" },
                        { "label": " Diameter 0.457 mm +/- 0.02mm", "name": " Diameter 0.457 mm +/- 0.02mm" },
                        { "label": " Magnetism Non Magnetic", "name": " Magnetism Non Magnetic" },
                         { "label": " Magnetism Magnetic", "name": " Magnetism Magnetic" },
                          { "label": "Make KANTHAL/SANDVIK", "name": "Make KANTHAL/SANDVIK" },
                           { "label": " Max.Mv Deviation@1000 +/-0.02mV with your Earlier melt no. KKP JT 679 & KKN JT 389 THERMOCOUPLE", "name": "Max.Mv Deviation@1000 +/-0.02mV with your Earlier melt no. KKP JT 679 & KKN JT 389 THERMOCOUPLE" },
                            { "label": "Spool Weight Net.Weight 2-3 Kg", "name": "Spool Weight Net.Weight 2-3 Kg" },
                             { "label": " Surface Bright & Annealed", "name": " Surface Bright & Annealed" }
                    ]
                },
                {
                    "name": "T2 - 26 Guage -Spools",
                    "code": "RC007",
                    "fields":  [
                        { "label": "Test Certificate Compare tc with earlier wire tc", "name": "Test Certificate Compare tc with earlier wire tc" },
                        { "label": " Diameter 0.457 mm +/- 0.02mm", "name": " Diameter 0.457 mm +/- 0.02mm" },
                        { "label": " Magnetism:- Non Magnetic", "name": " Magnetism Non Magnetic" },
                         { "label": " Magnetism:- Magnetic", "name": " Magnetism Magnetic" },
                          { "label": "Make:- KANTHAL/SANDVIK", "name": "Make KANTHAL/SANDVIK" },
                           { "label": " Max.Mv Deviation@1200 +/-0.02mV with your Earlier melt no. KKN JT 389 & KPP JT 679 THERMOCOUPLE", "name": "Max.Mv Deviation@1200 +/-0.02mV with your Earlier melt no. KKP JT 679 & KKN JT 389 THERMOCOUPLE" }
                          
                    ]
                },
                {
                    "name": "Resin Coated Sand  SUPER 25/35/70",
                    "code": "RC008",
                    "fields": [
                        { "label": "Crach Test One day production & Check 10 cup for crach & strength", "name": "Crach Test One day production & Check 10 cup for crach & strength" },
                        { "label": "HTS-Kg/Cm2 AS PER Certificate", "name": "HTS-Kg/Cm2 AS PER Certificate" },
                        { "label": "Mesh-AFS AS PER Certificate", "name": "Mesh-AFS AS PER Certificate" },
                        { "label": "Test Certificate Check certifcate avaliability", "name": "Test Certificate Check certifcate avaliability" },
                        { "label": "Checking by SSK / AKK / BLL:- Sign on the bill", "name": "Checking by SSK / AKK / BLL:- Sign on the bill" }
                    ]
                },
                {
                    "name": "1250 MM-QUARTZ TUBE  Ceramic Tip",
                    "code": "RC009",
                    "fields": [
                        { "label": "Inner Diemeter 1.2 mm - 0.2 mm", "name": "Inner Diemeter 1.2 mm - 0.2 mm" },
                        { "label": "Outer Diameter 3.0 mm +0.1 mm", "name": "Outer Diameter 3.0 mm +0.1 mm" },
                        { "label": "Length 1250 +/- 10 mm", "name": "Length 1250 +/- 10 mm" },
                        { "label": "Ends ok", "name": "Ends ok" },
                        { "label": "check by ssk sing. on the challan", "name": "check by ssk sing. on the challan" }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP-10 mtr",
                    "code": "RL001",
                    "fields": [
                        { "label": "LENGHT 10 +/- 0.1 MTR", "name": "LENGHT 10 +/- 0.1 MTR" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                       
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP-RUBBER",
                    "code": "RL002",
                    "fields": [
                        { "label": "Diameter Of Wire 0.7 mm + 0.1mm", "name": "Diameter Of Wire 0.7 mm + 0.1mm" },
                        { "label": "Wires 3", "name": "Wires 3" },
                        { "label": "Neoprenerrubber Insulated For:- + = white - = blue", "name": "Neoprenerrubber Insulated For:- + = white - = blue" },
                        { "label": "Overall Insulated For Ptrh Green", "name": "Overall Insulated For Ptrh Green" },
                        { "label": "Overall Asbestos Braided Overall asbestos braided", "name": "Overall Asbestos Braided Overall asbestos braided" },
                        { "label": "Mv Genrated When Heated Upto 200 Deg C max. AT 0.1 mv ", "name": "Mv Genrated When Heated Upto 200 Deg C max. AT 0.1 mv" }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP-TEFLON COATED",
                    "code": "RL003",
                    "fields": [
                        { "label": "Diameter Of Wire 0.7 mm +0.1mm", "name": "Diameter Of Wire 0.7 mm +0.1mm" },
                        { "label": " Wires NILL", "name": " Wires NILL" },
                        { "label": " Neoprenerrubber Insulated Fo:- + = White - = Blue", "name": "Neoprenerrubber Insulated Fo:- + = White - = Blue" },
                        { "label": "Overall Insulated For Ptrh white/blue", "name": "Overall Insulated For Ptrh white/blue" },
                        { "label": " Mv Genrated When Heated Upto 200 Deg C max. 0.1 mv", "name": " Mv Genrated When Heated Upto 200 Deg C max. 0.1 mv" }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP-20 mtr",
                    "code": "RL004",
                    "fields": [
                        { "label": "LENGTH 20 +/- 0.1 MTR", "name": "LENGTH 20 +/- 0.1 MTR" },
                        { "label": " checking by vendor vendor test certificate", "name": " checking by vendor vendor test certificate" }
                        
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP-100 mtr",
                    "code": "RL005",
                    "fields": [
                        { "label": "diameter of wire 0.7 +/- 0.1 mm", "name": "diameter of wire 0.7 +/- 0.1 mm" },
                        { "label": " wires 3", "name": " wires 3" },
                        { "label": "pvc insulated for + & -+ = white & - = blue", "name": "pvc insulated for + & -+ = white & - = blue" },
                        { "label": " overall insulated for ptrh green", "name": " overall insulated for ptrh green" },
                        { "label": "overall asbestos braided overall asbostos brided", "name": "overall asbestos braided overall asbostos brided" },
                        { "label": " mv genrate when heated 200 deg c 0.1 mv at 200 deg. c", "name": " mv genrate when heated 200 deg c 0.1 mv at 200 deg. c" }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR TIP  SS BRAIDED",
                    "code": "RL007",
                    "fields": [
                        { "label": "Diameter Of Wire 0.7 mm + 0.1mm", "name": "Diameter Of Wire 0.7 mm + 0.1mm" },
                        { "label": " wires 3", "name": " wires 3" },
                        { "label": " mv genrate when heated 200 deg c 0.1 mv max.", "name": " mv genrate when heated 200 deg c 0.1 mv max." }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR OXY PROBES",
                    "code": "RL008",
                    "fields": [
                        { "label": "Diameter Of Wire 40/36 4 CORE WIRE S TYPE CABLE", "name": "Diameter Of Wire 40/36 4 CORE WIRE S TYPE CABLE" },
                        { "label": " Wires 40/36 4 CORE", "name": " Wires 40/36 4 CORE" },
                        { "label": "Neoprenerrubber Insulated For + = white, orange  - = blue, black", "name": "Neoprenerrubber Insulated For + = white, orange  - = blue, black" },
                        { "label": " Overall Insulated For Ptrh BLACK", "name": " Overall Insulated For Ptrh BLACK" },
                        { "label": " Overall Insulated For Ptrh", "name": " Overall Insulated For Ptrh" },
                        { "label": " Mv Genrated When Heated Upto 200 Deg C max. AT 0.1 mv ", "name": " Mv Genrated When Heated Upto 200 Deg C max. AT 0.1 mv " }
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR CUP-10 mtr",
                    "code": "RM001",
                    "fields": [
                        { "label": "LENGTH 10 +/- .01 MTR", "name": "LENGTH 10 +/- .01 MTR" },
                        { "label": " checking by vendor vendor test certificate", "name": " checking by vendor vendor test certificate" }
                       
                    ]
                },
                {
                    "name": "OXY PROBE HEAD",
                    "code": "RM002",
                    "fields": [
                        { "label": "Diameter 1.0 mm - 0.1 mm", "name": "Diameter 1.0 mm - 0.1 mm" },
                        { "label": " Mv Generated When Heat 0.7 mv max", "name": " Mv Generated When Heat 0.7 mv max" },
                        { "label": "Checking By Ssk Sign.on the challon", "name": "Checking By Ssk Sign.on the challon" }
                    ]
                },
                {
                    "name": "CERAMIC CUP",
                    "code": "RM003",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:- OK", "name": "ONLY QTY.TO BE CHECKING:- OK" }
                        
                    ]
                },
                {
                    "name": "COPPER PIPE  STRAIGHT 6 * 8 MM (REGULAR)",
                    "code": "RM004",
                    "fields": [
                        { "label": "Inner Diameter 6 mm +/- 0.1 mm", "name": "Inner Diameter 6 mm +/- 0.1 mm" },
                        { "label": "Outer Diameter 8 mm +/- 0.1 mm", "name": "Outer Diameter 8 mm +/- 0.1 mm" },
                        { "label": "checking by vendor Sign on challon", "name": "checking by vendor Sign on challon" }
                    ]
                },
                {
                    "name": "ALLOY  ( Cuprothal SNX ) 1.29 mm",
                    "code": "RM005",
                    "fields": [
                        { "label": "Diameter (RM005) 1.29 -0.02 MM", "name": "Diameter (RM005) 1.29 -0.02 MM" },
                        { "label": " MV.GENERATED WHEN HEAT:- 0.7 MV. Max", "name": " MV.GENERATED WHEN HEAT:- 0.7 MV. Max" },
                        { "label": " Test Certificate As Per Standard IEC Geade I", "name": " Test Certificate As Per Standard IEC Geade " },
                        { "label": "Surface Bright & Annealed", "name": "Surface Bright & Annealed" }
                    ]
                },
                {
                    "name": "ROUND PLATE DIA 33*5 MM (HORIZONTAL )",
                    "code": "RM006",
                    "fields": [
                        { "label": "OD 32.8 +/- 0.1 mm", "name": "OD 32.8 +/- 0.1 mm" },
                        { "label": " THICKNESS 5 +/- 0.02 mm", "name": " THICKNESS 5 +/- 0.02 mm" },
                        { "label": "SURFACE CLEEN", "name": "SURFACE CLEEN" }
                    ]
                },
                {
                    "name": "Batteries rechargeable",
                    "code": "RM007",
                    "fields": [
                        { "label": "Make Sanyo", "name": "Make Sanyo" }
                        
                    ]
                },
                {
                    "name": "Batter card 70 ma",
                    "code": "RM008",
                    "fields": [
                        { "label": "Make Twintech", "name": "Make Twintech" }
                      
                    ]
                },
                {
                    "name": "Key board for CSA (12 Keys)",
                    "code": "RM009",
                    "fields": [
                        { "label": "Make Twintech / FLUXION PROCESS SOLUTIONS", "name": "Make Twintech / FLUXION PROCESS SOLUTIONS" }
                       
                    ]
                },
                {
                    "name": "Line driver",
                    "code": "RM010",
                    "fields": [
                        { "label": "Model SC04U 230V AC", "name": "Model SC04U 230V AC" }
                     
                    ]
                },
                {
                    "name": "ROUND PLATE DIA 40 MM * 5 (HORIZONTAL )",
                    "code": "RM011",
                    "fields": [
                        { "label": "OD 39.8 +/- 0.1 mm", "name": "OD 39.8 +/- 0.1 mm" },
                        { "label": "THICKNESS 5 mm +/- 0.02", "name": "THICKNESS 5 mm +/- 0.02" },
                        { "label": "SURFACE CLEEN", "name": "SURFACE CLEEN" }
                    ]
                },
                {
                    "name": "CHECK - MATE ( M V Source ) (Mains)",
                    "code": "RM012",
                    "fields": [
                        { "label": "Make PRECISION CONVERTERS", "name": "Make PRECISION CONVERTERS" }
                      
                    ]
                },
                {
                    "name": "M V Source (battery)",
                    "code": "RM013",
                    "fields": [
                        { "label": "Make Thermocab / R.S.SENSOR / PRECIEION", "name": "Make Thermocab / R.S.SENSOR / PRECIEION" }
                      
                    ]
                },
                {
                    "name": "BLOW PIPE",
                    "code": "RM014",
                    "fields": [
                        { "label": "Make San Telequip. P. Ltd", "name": "Make San Telequip. P. Ltd" }
                       
                    ]
                },
                {
                    "name": "HORIZONTAL IMMERSION SAMPLER",
                    "code": "RM015",
                    "fields": [
                        { "label": "Weight 300 Gms", "name": "Weight 300 Gms" },
                        { "label": "Make Artech", "name": "Make Artech" }
                       
                    ]
                },
                {
                    "name": "4 Inch  display with wire (One Side)",
                    "code": "RM016",
                    "fields": [
                        { "label": "Make FLUXION PROCESS SOLUTIONS", "name": "Make FLUXION PROCESS SOLUTIONS" }
                       
                    ]
                },
                {
                    "name": "Costic Soda",
                    "code": "RM018",
                    "fields": [
                        { "label": "TEST CERTIFICATE OK", "name": "TEST CERTIFICATE OK" }
                      
                    ]
                },
                {
                    "name": "Battery charger-130mA",
                    "code": "RM019",
                    "fields": [
                        { "label": "Make FLUXION", "name": "Make FLUXION" }
                        
                    ]
                },
                {
                    "name": "4 CELL BATTERY BOARD TBB 04",
                    "code": "RM020",
                    "fields": [
                        { "label": "MAKE FLUXION", "name": "MAKE FLUXION" }
                       
                    ]
                },
                {
                    "name": "7 CELL BATTERY BOARD TBB07",
                    "code": "RM021",
                    "fields": [
                        { "label": "MAKE TWINTECH", "name": "MAKE TWINTECH" }
                       
                    ]
                },
                {
                    "name": "SPECTRO DISPLAY",
                    "code": "RM022",
                    "fields": [
                        { "label": "MAKE SIMPLE SOLUTION /FLUXION PROCESS SOLUTIONS / CONSEPT", "name": "MAKE SIMPLE SOLUTION /FLUXION PROCESS SOLUTIONS / CONSEPT" }
                        
                    ]
                },
                {
                    "name": "Handles for lance",
                    "code": "RM023",
                    "fields": [
                        { "label": "Dimensions Length=100 MM +/- 5 MM", "name": "Dimensions Length=100 MM +/- 5 MM" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "M.S. Turned 17 MM SLEEVES For Tip Holder",
                    "code": "RM024",
                    "fields": [
                        { "label": "Dimensioms As Per Drawing No. In.height- 40 +/- 1mm.", "name": "Dimensioms As Per Drawing No. In.height- 40 +/- 1mm." },
                        { "label": "Length 80 +/- 1", "name": "Length 80 +/- 1" },
                        { "label": "Inner Diameter 15 +/- 0.2", "name": "Inner Diameter 15 +/- 0.2" },
                         { "label": "Outer Diameter 17 +/- 0.2", "name": "Outer Diameter 17 +/- 0.2" },
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                    ]
                },
                {
                    "name": "THERMOCOUPLE FOR CUP SHELL MOULDING",
                    "code": "RM025",
                    "fields": [
                        { "label": "Colour Code Green", "name": "Colour Code Green" },
                        { "label": "Quantity as per GRR", "name": "Quantity as per GRR" }
                       
                    ]
                },
                {
                    "name": "SPECTRO DISPLAY AND SPEAKER WITH INTEGRATED GATEWAY",
                    "code": "RM027",
                    "fields": [
                        { "label": "MAKE SIMPLE SOLUTION /FLUXION PROCESS SOLUTIONS /CONSEPT", "name": "MAKE SIMPLE SOLUTION /FLUXION PROCESS SOLUTIONS /CONSEPT" }
                        
                    ]
                },
                {
                    "name": "ROUND PLATE 15* 0.2 MM (HORIZONTAL)",
                    "code": "RM028",
                    "fields": [
                        { "label": "OD 15 +/- 0.1 mm", "name": "OD 15 +/- 0.1 mm" },
                        { "label": " THICKNESS 0.2 mm", "name": " THICKNESS 0.2 mm" },
                        { "label": "SURFACE CLEEN", "name": "SURFACE CLEEN" }
                    ]
                },
                {
                    "name": "Hand Gloves",
                    "code": "RM030",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING OK", "name": "ONLY QTY.TO BE CHECKING OK" }
                       
                    ]
                },
                {
                    "name": "LM 335 PROTECTION PCB FOR MICRO MAINS",
                    "code": "RM031",
                    "fields": [
                        { "label": "Colour Code Blue", "name": "Colour Code Blue" },
                        { "label": "Quantity as per GRR", "name": "Quantity as per GRR" }
                        
                    ]
                },
                {
                    "name": "Stainless steel pipe - 5 feet ( 13 * 15 )",
                    "code": "RM032",
                    "fields": [
                        { "label": "Inner Diameter 13 mm +/- 0.5 mm", "name": "Inner Diameter 13 mm +/- 0.5 mm" },
                        { "label": " Outer Diameter 15 mm +/- 0.5 mm.", "name": " Outer Diameter 15 mm +/- 0.5 mm." },
                        { "label": " Length 5 feet +/- 1", "name": " Length 5 feet +/- 1" },
                        { "label": " checking by vendor Sign on challon", "name": " checking by vendor Sign on challon" }
                    ]
                },
                {
                    "name": "Stainless steel pipe - 10 feet ( 13 * 16 )",
                    "code": "RM033",
                    "fields": [
                        { "label": "Inner Diameter 13 mm +/- 0.5 mm", "name": "Inner Diameter 13 mm +/- 0.5 mm" },
                        { "label": "Outer Diameter 16 mm +/- 0.5 mm", "name": "Outer Diameter 16 mm +/- 0.5 mm" },
                        { "label": " Length 10 feet +/- 1", "name": " Length 10 feet +/- 1" },
                        { "label": " checking by vendor Sign on challon", "name": " checking by vendor Sign on challon" }
                    ]
                },
                {
                    "name": "T1- 10  Guage",
                    "code": "RM034",
                    "fields": [
                        { "label": "Diameter (RM034) 3.20 MM + 0. 8 mm / 0. 2 mm", "name": "Diameter (RM034) 3.20 MM + 0. 8 mm / 0. 2 mm" },
                        { "label": "Magnetism  (RM034) Non Magnetic", "name": "Magnetism  (RM034) Non Magnetic" },
                        { "label": "Test Certificate As Per Standard IEC Grade I", "name": "Test Certificate As Per Standard IEC Grade I" },
                        { "label": "Surface Oxidised & Annealed", "name": "Surface Oxidised & Annealed" }
                    ]
                },
                {
                    "name": "T2- 10  Guage",
                    "code": "RM035",
                    "fields":[
                        { "label": "Diameter (RM035) 3.20 MM + 0. 8 mm / 0. 2 mm", "name": "Diameter (RM035) 3.20 MM + 0. 8 mm / 0. 2 mm" },
                        { "label": "Magnetism  (RM035) Non Magnetic", "name": "Magnetism  (RM035) Non Magnetic" },
                        { "label": "Test Certificate As Per Standard IEC Grade I", "name": "Test Certificate As Per Standard IEC Grade I" },
                        { "label": "Surface Oxidised & Annealed", "name": "Surface Oxidised & Annealed" }
                    ]
                },
                {
                    "name": "Sampler Head.",
                    "code": "RM036",
                    "fields": [
                        { "label": "Colour Code Blue", "name": "Colour Code Blue" }
                        
                    ]
                },
                {
                    "name": "BORAX",
                    "code": "RM037",
                    "fields": [
                        { "label": "Test Certificate yes", "name": "Test Certificate yes" }
                        
                    ]
                },
                {
                    "name": "SAMPLAR HEAD  2  IN  1",
                    "code": "RM038",
                    "fields": [
                        { "label": "MAKE PEACOCK ALLIED PRODUCTS", "name": "MAKE PEACOCK ALLIED PRODUCTS" }
                        
                    ]
                },
                {
                    "name": "Gum Tape (Brown Self Adhesiv)-2 Inches",
                    "code": "RM039",
                    "fields": [
                        { "label": "Width 0.5''   TO 4", "name": "Width 0.5''   TO 4" }
                       
                    ]
                },
                {
                    "name": "MINKON SAMPLE-Thermocouple",
                    "code": "RM040",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKAIG OK", "name": "ONLY QTY.TO BE CHECKAIG OK" }
                        
                    ]
                },
                {
                    "name": "KRAFT BOARD 325 GSM",
                    "code": "RM041",
                    "fields": [
                        { "label": "Kraft Board 36 Inch 325 +/- 5 GSM", "name": "Kraft Board 36 Inch 325 +/- 5 GSM" }
                        
                    ]
                },
                {
                    "name": "O RING SILICON FOR CUP SHELL MOULDING",
                    "code": "RM042",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "MINKON-Sauerstoffmesskopf OXL-TIP-C27-B- low leval Oxygen",
                    "code": "RM043",
                    "fields": [
                        { "label": "Testing:- ok", "name": "Testing:- ok" }
                        
                    ]
                },
                {
                    "name": "MINKON-Sauerstoffmesskopf OXL-TIP-C27-S- low leval Oxygen",
                    "code": "RM044",
                    "fields": [
                        { "label": "Testing:- ok", "name": "Testing:- ok" }
                        
                    ]
                },
                {
                    "name": "Turbo Electronic Systems",
                    "code": "RM045",
                    "fields": [
                        { "label": "make turbo", "name": "make turbo" }
                       
                    ]
                },
                {
                    "name": "200 mm DIA LED LIGHT (TRAFFIC SIGNAL)",
                    "code": "RM046",
                    "fields": [
                        { "label": "Make Twintech", "name": "Make Twintech" }
                        
                    ]
                },
                {
                    "name": "MINKON-Oxygen head OX-TIP-Z27-B high leval Oxygen",
                    "code": "RM047",
                    "fields": [
                        { "label": "Testing:- ok", "name": "Testing:- ok" }
                        
                    ]
                },
                {
                    "name": "MINKON-Oxygen head OX-TIP-Z27-S-  high leval Oxygen",
                    "code": "RM048",
                    "fields": [
                        { "label": "Testing:- ok", "name": "Testing:- ok" }
                        
                    ]
                },
                {
                    "name": "CRAFTCOTE -72m",
                    "code": "RM049",
                    "fields": [
                        { "label": "MAKE CERAFLUX", "name": "MAKE CERAFLUX" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                        
                    ]
                },
                {
                    "name": "DIGITAL TIMER 4'' INCH.",
                    "code": "RM050",
                    "fields": [
                        { "label": "Null NULL", "name": "Null NULL" }
                        
                    ]
                },
                {
                    "name": "LM335 FOR PURCHASE",
                    "code": "RM051",
                    "fields": [
                        { "label": "QTY. CHECK QTY. CHECK", "name": "QTY. CHECK QTY. CHECK" }
                       
                    ]
                },
                {
                    "name": "LD CERAMIC TUBE (20.3 x 30 x 75)mm",
                    "code": "RM052",
                    "fields": [
                        { "label": "INNER DIEMETER 20.3 MM+/ 1.2MM", "name": "INNER DIEMETER 20.3 MM+/ 1.2MM" },
                        { "label": "OUTETR DIEMETER 30 MM +/- 1 MM", "name": "OUTETR DIEMETER 30 MM +/- 1 MM" },
                        { "label": "LENGTH 75 MM +/- 2 MM", "name": "LENGTH 75 MM +/- 2 MM" },
                        { "label": "Thickness 6 MM +/- 1 MM", "name": "Thickness 6 MM +/- 1 MM" }
                    ]
                },
                {
                    "name": "PAPER TUBE ( CAP )",
                    "code": "RM053",
                    "fields": [
                        { "label": "OD 28.2 mm +0.2 mm", "name": "OD 28.2 mm +0.2 mm" },
                        { "label": "ID 27 mm +0.2mm", "name": "ID 27 mm +0.2mm" },
                        { "label": "LENGTH 42 mm + 3 mm", "name": "LENGTH 42 mm + 3 mm" }
                    ]
                },
                {
                    "name": "POWDER B ",
                    "code": "RM055",
                    "fields": [
                        { "label": "Purity Min.99 %", "name": "Purity Min.99 %" },
                        { "label": " Flame Test Gas Flame must be green", "name": " Flame Test Gas Flame must be green" },
                        { "label": " Mesh- 60 or finer", "name": " Mesh- 60 or finer" },
                         { "label": "Checking By Ssk Sing.on the challon", "name": "Checking By Ssk Sing.on the challon" }
                    ]
                },
                {
                    "name": "POWDER C ",
                    "code": "RM056",
                    "fields": [
                        { "label": "Diameter 0.77mm +/- 0.05mm", "name": "Diameter 0.77mm +/- 0.05mm" },
                        { "label": " Magnetism Non Magnetic", "name": " Magnetism Non Magnetic" },
                        { "label": "Magnetism Magnetic", "name": "Magnetism Magnetic" },
                        { "label": " Make Driver Harris", "name": " Make Driver Harris" },
                        { "label": "Max Mv Deviation @1000 Deg 0.04mv.", "name": "Max Mv Deviation @1000 Deg 0.04mv." }
                    ]
                },
                {
                    "name": "Nylon Rope",
                    "code": "RM057",
                    "fields": [
                        { "label": "CHECKING ONLY QUANTITY YES", "name": "CHECKING ONLY QUANTITY YES" }
                        
                    ]
                },
                {
                    "name": "GROUND ISOLATOR",
                    "code": "RM058",
                    "fields": [
                        { "label": "MAKE ACCEL SYSTEM / zephyar system", "name": "MAKE ACCEL SYSTEM / zephyar system" }
                       
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR CUP-20 mtr",
                    "code": "RM060",
                    "fields": [
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" },
                        { "label": "LENGTH 20   +/- 0.1 MTR", "name": "LENGTH 20   +/- 0.1 MTR" }
                        
                    ]
                },
                {
                    "name": "COMPENSATING CABLE FOR CUP-100 mtr",
                    "code": "RM061",
                    "fields": [
                        { "label": "Diameter Of Wire 0.7 +/- 0.1 mm", "name": "Diameter Of Wire 0.7 +/- 0.1 mm" },
                        { "label": "Wires 3", "name": "Wires 3" },
                        { "label": "Pvc Insulateed for + & -+ = white & - = Blue", "name": "Pvc Insulateed for + & -+ = white & - = Blue" },
                        { "label": "Overall Insulated For Cral Red", "name": "Overall Insulated For Cral Red" },
                        { "label": "Overall Asbestos Barided Compleate asbestos Braided", "name": "Overall Asbestos Barided Compleate asbestos Braided" },
                        { "label": "Mv.Generated when heated upto 200 deg. Max. 0.1 mv", "name": "Mv.Generated when heated upto 200 deg. Max. 0.1 mv" }
                    ]
                },
                {
                    "name": "2 MM BLUE  SLEEVES",
                    "code": "RM062",
                    "fields": [
                        { "label": "I.D. 2 MM +/- 0.1 MM", "name": "I.D. 2 MM +/- 0.1 MM" },
                        { "label": "Sleeve Colour Blue", "name": "Sleeve Colour Blue" },
                        { "label": "QTY.TO BE CHECKING NILL", "name": "QTY.TO BE CHECKING NILL" }
                    ]
                },
                {
                    "name": "2 MM WHITE  SLEEVES",
                    "code": "RM063",
                    "fields": [
                        { "label": "I.D. 2 MM +/- 0.1 MM", "name": "I.D. 2 MM +/- 0.1 MM" },
                        { "label": "Sleeve Colour White", "name": "Sleeve Colour White" },
                        { "label": "ONLY QTY.TO BE CHECKING NILL", "name": "ONLY QTY.TO BE CHECKING NILL" }
                    ]
                },
                {
                    "name": "3 MM BLUE SLEEVES",
                    "code": "RM064",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING OK", "name": "ONLY QTY.TO BE CHECKING OK" },
                        { "label": "I.D. 3 MM +/- 0.1 MM", "name": "I.D. 3 MM +/- 0.1 MM" },
                        { "label": "Sleeve Colour BLUE", "name": "Sleeve Colour BLUE" }
                    ]
                },
                {
                    "name": "3 MM WHITE SLEEVES",
                    "code": "RM065",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" },
                        { "label": "I.D. 3 MM +/- 0.1 MM", "name": "I.D. 3 MM +/- 0.1 MM" },
                        { "label": "Sleeve Colour WHITE", "name": "Sleeve Colour WHITE" }
                    ]
                },
                {
                    "name": "AD590 FOR PURCHASE",
                    "code": "RM067",
                    "fields": [
                        { "label": "QNLY QTY.TO BE CHECKING OK", "name": "QNLY QTY.TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "4 Inch  display wireless",
                    "code": "RM068",
                    "fields": [
                        { "label": "MAKE FLUXION PROCESS SOLUTIONS", "name": "MAKE FLUXION PROCESS SOLUTIONS" }
                       
                    ]
                },
                {
                    "name": "COMPOSETTING CABLE INDUSTRIAL FIBER GLASS  CABLE",
                    "code": "RM070",
                    "fields": [
                        { "label": "Diameter Of Wire 0.7 mm +0.1mm", "name": "Diameter Of Wire 0.7 mm +0.1mm" },
                        { "label": "wires 3", "name": " wires 3" },
                        { "label": "mv genrate when heated 200 deg c 0.1 mv max.", "name": "mv genrate when heated 200 deg c 0.1 mv max." }
                    ]
                },
                {
                    "name": "MUFFLE FURNCE",
                    "code": "RM071",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING NILL", "name": "ONLY QTY. TO BE CHECKING NILL" }
                       
                    ]
                },
                {
                    "name": "2 HP BLOWER WITH MOTOR",
                    "code": "RM072",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING NULL", "name": "ONLY QTY.TO BE CHECKING NULL" }
                       
                    ]
                },
                {
                    "name": "RESIN COATED SAND SAMPLER-RI",
                    "code": "RM073",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING NULL", "name": "ONLY QTY.TO BE CHECKING NULL" }
                       
                    ]
                },
                {
                    "name": "BORAX (SALE)",
                    "code": "RM074",
                    "fields": [
                        { "label": "ONLY  QTY  TO  BE  CHECKING NULL", "name": "ONLY  QTY  TO  BE  CHECKING NULL" }
                        
                    ]
                },
                {
                    "name": "THERMOCOL  SHEETS",
                    "code": "RM076",
                    "fields": [
                        { "label": "ONLY  QTY  TO  BE  CHECKING NULL", "name": "ONLY  QTY  TO  BE  CHECKING NULL" }
                        
                    ]
                },
                {
                    "name": "MAZE STARCH  MANUFACTURED BY SAHYADRI",
                    "code": "RM077",
                    "fields": [
                        { "label": "SHEFLIFE CHECK SHELFLIFE DATE", "name": "SHEFLIFE CHECK SHELFLIFE DATE" }
                        
                    ]
                },
                {
                    "name": "PAPER CAP OXY PROBE",
                    "code": "RM078",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "5 MM PVC  SLEEVES WHITE",
                    "code": "RM079",
                    "fields":[
                        { "label": "ONLY  QTY  TO  BE  CHECKING NULL", "name": "ONLY  QTY  TO  BE  CHECKING NULL" }
                        
                    ]
                },
                {
                    "name": "BUZZER",
                    "code": "RM080",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING", "name": "ONLY QTY.TO BE CHECKING" }
                        
                    ]
                },
                {
                    "name": "5 MM PVC SLEEVES  BLUE",
                    "code": "RM081",
                    "fields": [
                        { "label": "ONLY  QTY  TO  BE  CHECKING NULL", "name": "ONLY  QTY  TO  BE  CHECKING NULL" }
                        
                    ]
                },
                {
                    "name": "SUPERWOOL PLUS BULK",
                    "code": "RM082",
                    "fields": [
                        { "label": "MAKE l Murugappa Morgan Thermal Ceramic Ltd.", "name": "MAKE l Murugappa Morgan Thermal Ceramic Ltd." }
                       
                    ]
                },
                {
                    "name": "METAL BUSH FO CUP SHELL MOULDNG",
                    "code": "RM083",
                    "fields": [
                        { "label": "MAKE FLUXION PROCESS SOLUTIONS", "name": "MAKE FLUXION PROCESS SOLUTIONS" }
                        
                    ]
                },
                {
                    "name": "BOX STRAPPING  ROLL",
                    "code": "RM085",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "CUP EJECTOR PINS FOR SHELL MOULDING",
                    "code": "RM086",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "QUARTZ TUBE SAMPLER - RI",
                    "code": "RM087",
                    "fields": [
                        { "label": "ONLY  QTY  TO  BE  CHECKING NULL", "name": "ONLY  QTY  TO  BE  CHECKING NULL" }
                        
                    ]
                },
                {
                    "name": "ZIRCONIUM CELL",
                    "code": "RM088",
                    "fields": [
                        { "label": "DESIGNATION GAINE ZFMESH 3.25*4.65 lg25.5 svt,plan 170043", "name": "DESIGNATION GAINE ZFMESH 3.25*4.65 lg25.5 svt,plan 170043" },
                        { "label": " MATERIAL ZFMESH", "name": " MATERIAL ZFMESH" },
                        { "label": " PART NUMBER 170043", "name": " PART NUMBER 170043" }
                    ]
                },
                {
                    "name": "PACKING & FORWARDING CHARGES",
                    "code": "RM089",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING OK", "name": "ONLY QTY. TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "WOODEN PALLET",
                    "code": "RM091",
                    "fields": [
                        { "label": "DIAMETER 1.2 MM - 0.1", "name": "DIAMETER 1.2 MM - 0.1" },
                        { "label": "MV.GENERATED WHEN HEAT 0.7 MV MAX.", "name": "MV.GENERATED WHEN HEAT 0.7 MV MAX." },
                        { "label": "CHECKING BY SSK SING.ON THE CHALLAN", "name": "CHECKING BY SSK SING.ON THE CHALLAN" }
                    ]
                },
                {
                    "name": "PROXY INDUCTIVE SENSOR 30 VDC FOR CUP SHELL MOUDING",
                    "code": "RM093",
                    "fields": [
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                      
                    ]
                },
                {
                    "name": "Bubble Sheet Bags",
                    "code": "RM094",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING YES", "name": "ONLY QTY.TO BE CHECKING YES" }
                      
                    ]
                },
                {
                    "name": "KRAFT BOARD 250 GSM",
                    "code": "RM096",
                    "fields": [
                        { "label": "Kraft Board 36 Inch 250 gsm +/- 5 GSM", "name": "Kraft Board 36 Inch 250 gsm +/- 5 GSM" }
                      
                    ]
                },
                {
                    "name": "SOL VALVE COIL 220V FOR CUP SHELL MOULDING",
                    "code": "RM097",
                    "fields": [
                        { "label": "checking by vendor vendor test certificate", "name": "checking by vendor vendor test certificate" }
                        
                    ]
                },
                {
                    "name": "Lensel  Optic",
                    "code": "RM101",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING OK", "name": "ONLY QTY.TO BE CHECKING OK" }
                       
                    ]
                },
                {
                    "name": "PROXY INDUCTIVE SENSOR 230 V FOR CUP SHELL MOULDING",
                    "code": "RM117",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING YES", "name": "ONLY QTY.TO BE CHECKING YES" }
                        
                    ]
                },
                {
                    "name": "LD SLEEVE (BOTH SIDE OPEN)",
                    "code": "RM128",
                    "fields": [
                        { "label": "LENGTH 75 MM +/- 1 MM", "name": "LENGTH 75 MM +/- 1 MM" },
                        { "label": " I.D. 29/30 MM  - 1 MM", "name": " I.D. 29/30 MM  - 1 MM" },
                        { "label": " O D 42 MM +/- 1 MM", "name": " O D 42 MM +/- 1 MM" }
                    ]
                },
                {
                    "name": "M.S.TURNED 16 MM SLEEVES FOR S & p TIP HOLDER",
                    "code": "RM129",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING YES", "name": "ONLY QTY.TO BE CHECKING YES" }
                        
                    ]
                },
                {
                    "name": "COPPER PIPE STRIGHT for S & P 9.5 * 11 MM",
                    "code": "RM131",
                    "fields": [
                        { "label": "Inner Diameter 9.5 mm +/- 0.1 mm", "name": "Inner Diameter 9.5 mm +/- 0.1 mm" },
                        { "label": " Outer Diameter 11 mm +/- 0.1 mm", "name": " Outer Diameter 11 mm +/- 0.1 mm" },
                        { "label": " checking by vendor Sign on challon", "name": " checking by vendor Sign on challon" }
                    ]
                },
                {
                    "name": " CERAMIC TUBE (20.3 x 30 x 75)mm",
                    "code": "RM134",
                    "fields":  [
                        { "label": "Inner Diameter 20.3 mm +0.4 /- 0.0", "name": "Inner Diameter 20.3 mm +0.4 /- 0.0 mm" },
                        { "label": " Outer Diameter  30  + 0.5 /- 0.00 mm", "name": " Outer Diameter  30  + 0.5 /- 0.00 mm" },
                        { "label": "  LENGTH 75  + 0.00/- 1 mm", "name": "  LENGTH 75  + 0.00/- 1 mm" }
                    ]
                },
                {
                    "name": "METAL PIPE ( M S PIPE OD 18 * 0.5 THICK )",
                    "code": "RM135",
                    "fields": [
                        { "label": "OD 18 MM", "name": "OD 18 MM" },
                        { "label": " ID 17 MM", "name": " ID 17 MM" },
                        { "label": " Thickness 0.5 MM", "name": " Thickness 0.5 MM" }
                    ]
                },
                {
                    "name": "Aluminum Sampler Heads",
                    "code": "RM140",
                    "fields": [
                        { "label": "COLOUR CODE GREEN", "name": "COLOUR CODE GREEN" },
                        { "label": "QUANTITY AS PER GRR", "name": "QUANTITY AS PER GRR" }
                        
                    ]
                },
                {
                    "name": "PUSH ROD FOR TIP AND TUBE",
                    "code": "RM149",
                    "fields": [
                        { "label": "Only Qty. Check Qty. Check", "name": "Only Qty. Check Qty. Check" }
                        
                    ]
                },
                {
                    "name": "Aluminum Casting for wireless microportable",
                    "code": "RM159",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING NILL", "name": "ONLY QTY.TO BE CHECKING NILL" },
                        { "label": "SURFACE FINISH", "name": "SURFACE FINISH" },
                        { "label": "QUALITY OF PAINT NO PEELE OFF", "name": " QUALITY OF PAINT NO PEELE OFF" }
                    ]
                },
                {
                    "name": "CHARGING SOCKET & PIN",
                    "code": "RM164",
                    "fields": [
                        { "label": "MAKE TWINTECH", "name": "MAKE TWINTECH" }
                       
                    ]
                },
                {
                    "name": "EPROME  M - III",
                    "code": "RM167",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "TITANIUM STRIP -  R&D",
                    "code": "RM168",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "4 Pin Relimet",
                    "code": "RM171",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "TRA1 A4 & TRA1 - B2",
                    "code": "RM185",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "4 Pin Connector",
                    "code": "RM200",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "LED TV",
                    "code": "RM209",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "SAMPLER SPOONS (ROUND 12 MM)",
                    "code": "RM211",
                    "fields": [
                        { "label": "SPOONS HOL OK", "name": "SPOONS HOL OK" },
                        { "label": "FINISHIG OK", "name": "FINISHIG OK" }
                        
                    ]
                },
                {
                    "name": "SAMPLER SPOONS (OVEL SHAPE 15 MM) RAIPUR",
                    "code": "RM213",
                    "fields":[
                        { "label": "SPOONS HOL OK", "name": "SPOONS HOL OK" },
                        { "label": "FINISHIG OK", "name": "FINISHIG OK" }
                        
                    ]
                },
                {
                    "name": "SILICA FLOUR",
                    "code": "RM214",
                    "fields": [
                        { "label": "MESH 90-200", "name": "MESH 90-200" }
                        
                    ]
                },
                {
                    "name": "POTACIUM PERMANGANATE",
                    "code": "RM215",
                    "fields": [
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                       
                    ]
                },
                {
                    "name": "PTTC 0.05 MM",
                    "code": "RM217",
                    "fields": [
                        { "label": "MAKE SANJAY ADHESIVES", "name": "MAKE SANJAY ADHESIVES" }
                        
                    ]
                },
                {
                    "name": "RACK FOR 2.54 MODULE TYPE 2 FOR NEW CHINA WINDER",
                    "code": "RM218",
                    "fields": [
                        { "label": "Kraft board 36 Inch 250 TO 400 gsm", "name": "Kraft board 36 Inch 250 TO 400 gsm" }
                        
                    ]
                },
                {
                    "name": "4 Inch  display with wire (Double Sided)",
                    "code": "RM219",
                    "fields": [
                        { "label": "MAKE ACCEL SYSTEM /ZEPHYR/FLUXION PROCESS SOLUTIONS", "name": "MAKE ACCEL SYSTEM /ZEPHYR/FLUXION PROCESS SOLUTIONS" }
                      
                    ]
                },
                {
                    "name": "PTTC 0.06 MM",
                    "code": "RM220",
                    "fields": [
                        { "label": "ONLY QTY TO BE CHECKING OK", "name": "ONLY QTY TO BE CHECKING OK" }
                        
                    ]
                },
                {
                    "name": "BLACK BOX FOR  SPECTROMETER  DISPLAY",
                    "code": "RM221",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "ALLOY  ( Cuprothal SNX  ) 0.77mm",
                    "code": "RM223",
                    "fields": [
                        { "label": "DIAMETER (RM223) 0.77  - 0.1 mm", "name": "DIAMETER (RM223) 0.77  - 0.1 mm" },
                        { "label": "MV. GENERATED WHEN HEAT:- 0.7 MV. MAX", "name": "MV. GENERATED WHEN HEAT:- 0.7 MV. MAX" },
                        { "label": "Test Certificate As Per Standard IEC Grade I", "name": "Test Certificate As Per Standard IEC Grade I" },
                        { "label": "Surface Bright & Annealed", "name": "Surface Bright & Annealed" }
                    ]
                },
                {
                    "name": "EDGE GRINDER GS7132 2800 RPM FOR NEW CHINA WINDER",
                    "code": "RM224",
                    "fields": [
                        { "label": "Only Qty. Check Only Qty. Check", "name": "Only Qty. Check Only Qty. Check" }
                       
                    ]
                },
                {
                    "name": "SODIUM SILICATE",
                    "code": "RM225",
                    "fields": [
                        { "label": "GRADE NUTRAL GRADE", "name": "GRADE NUTRAL GRADE" },
                        { "label": " CONTAIN 33 to 40 % SOLID", "name": " CONTAIN 33 to 40 % SOLID" },
                        { "label": " QTY.TO BE CHECKED OK", "name": " QTY.TO BE CHECKED OK" }
                    ]
                },
                {
                    "name": "MAINDRAL FOR PAPER TUBE",
                    "code": "RM227",
                    "fields": [
                        { "label": "DIAMETER 18.3  - 0.1", "name": "DIAMETER 18.3  - 0.1" }
                       
                    ]
                },
                {
                    "name": "6 RhPT -0.03 mm",
                    "code": "RM228",
                    "fields": [
                        { "label": "LENGTH 10 MTR +/- 0.1 MTR", "name": "LENGTH 10 MTR +/- 0.1 MTR" },
                        { "label": "CHECKING BY VENDER VENDER TEST CERTIFICATE", "name": "CHECKING BY VENDER VENDER TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "30 % Rhpt - 0.03 mm",
                    "code": "RM229",
                    "fields": [
                        { "label": "LENGTH 20 MTR +/- 0.1 MTR", "name": "LENGTH 20 MTR +/- 0.1 MTR" },
                        { "label": "VENDOR TEST CERTIFICATE", "name": "VENDOR TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "8 MM SLEEVES",
                    "code": "RM230",
                    "fields": [
                        { "label": "ID 8MM  +/- 0.2MM", "name": "ID 8MM  +/- 0.2MM" }
                       
                    ]
                },
                {
                    "name": "PT RH 13 % 0.06 MM",
                    "code": "RM231",
                    "fields": [
                        { "label": "QTY CHECK OK", "name": "QTY CHECK OK" }
                      
                    ]
                },
                {
                    "name": "UTILITY colour plast",
                    "code": "RM232",
                    "fields": [
                        { "label": "TEST CERTIFICATE MFG.TEST CERTIFICATE", "name": "TEST CERTIFICATE MFG.TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "CUP SHELL CBE",
                    "code": "RM233",
                    "fields": [
                        { "label": "TEST CERTIFICATE MFG.TEST CERTIFICATE", "name": "TEST CERTIFICATE MFG.TEST CERTIFICATE" }
                        
                    ]
                },
                {
                    "name": "BATTRY PCB WITH CABLE",
                    "code": "RM234",
                    "fields": [
                        { "label": "QTY CHECK OK", "name": "QTY CHECK OK" }
                      
                    ]
                },
                {
                    "name": "LD SLEEVES for 1335 BLIND  29/30 * 40 * 75 MM",
                    "code": "RM235",
                    "fields": [
                        { "label": "Inner Diemeter 29/30 MM", "name": "Inner Diemeter 29/30 MM" },
                        { "label": "Outer Diemeter 40  MM  +/- 1 MM", "name": "Outer Diemeter 40  MM  +/- 1 MM" },
                        { "label": " Length 75 MM  +/- 1 MM", "name": " Length 75 MM  +/- 1 MM" }
                    ]
                },
                {
                    "name": "STRETCH WRAP FILM 300 MM *51 MIC",
                    "code": "RM236",
                    "fields": [
                        { "label": "THIKNESS 0.23 TO 0.50 + 0.05 Micron", "name": "THIKNESS 0.23 TO 0.50 + 0.05 Micron" },
                        { "label": " Only Qty.Check Qty.", "name": " Only Qty.Check Qty." }
                        
                    ]
                },
                {
                    "name": "STRETCH WRAP FILM 500 MM *51 MIC",
                    "code": "RM237",
                    "fields":  [
                        { "label": "THIKNESS 0.23 TO 0.50 + 0.05 Micron", "name": "THIKNESS 0.23 TO 0.50 + 0.05 Micron" },
                        { "label": " Only Qty.Check Qty.", "name": " Only Qty.Check Qty." }
                        
                    ]
                },
                {
                    "name": "PANASONIC SERVO DRIVE MFDLNA3SG011 200V FOR NEW CHINA WINDER",
                    "code": "RM238",
                    "fields": [
                        { "label": "Oil Only Qty.Check", "name": "Oil Only Qty.Check" }
                       
                    ]
                },
                {
                    "name": "AIR CYLINDER TECHNO SU 50 125 FOR OLD CHINA WINDER",
                    "code": "RM239",
                    "fields": [
                        { "label": "QTY CHECK OK", "name": "QTY CHECK OK" }
                      
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO 63 50 FOR OLD CHINA WINDER",
                    "code": "RM240",
                    "fields": [
                        { "label": "FRL Size Only Qty. Check", "name": "FRL Size Only Qty. Check" }
                        
                    ]
                },
                {
                    "name": "AIR CYLINDER SDA 80 25 FOR OLD CHINA WINDER",
                    "code": "RM241",
                    "fields": [
                        { "label": "I.D. 6MM +/- 1 MM", "name": "I.D. 6MM +/- 1 MM" },
                        { "label": "O.D. 8MM +/- 1 MM", "name": "O.D. 8MM +/- 1 MM" }
                       
                    ]
                },
                {
                    "name": "Colloidal Silica -20",
                    "code": "RM242",
                    "fields": [
                        { "label": "Colloidal Silica-20 TEST CERTIFICATE", "name": "Colloidal Silica-20 TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DNC 100 50 FOR OLD CHINA WINDER",
                    "code": "RM243",
                    "fields": [
                        { "label": "QTY CHECK OK", "name": "QTY CHECK OK" }
                      
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DNC 25 25 OLD CHINA WINDER",
                    "code": "RM244",
                    "fields": [
                        { "label": "MAKE KPT", "name": "MAKE KPT" },
                        { "label": "MODEL KM4SAK2", "name": "MODEL KM4SAK2" }
                       
                    ]
                },
                {
                    "name": "Key board for CSA (6 Keys)",
                    "code": "RM245",
                    "fields": [
                        { "label": "Make FLUXION", "name": "Make FLUXION" }
                        
                    ]
                },
                {
                    "name": "Chopped Fiber",
                    "code": "RM248",
                    "fields": [
                        { "label": "Grade S (1260 C)", "name": "Grade S (1260 C)" },
                        { "label": " Sieve Size 20 mm", "name": " Sieve Size 20 mm" }
                        
                    ]
                },
                {
                    "name": "LD SLEEVE 29/30 * 40 * 142 MM BLIND",
                    "code": "RM251",
                    "fields": [
                        { "label": "ID 29/30", "name": "ID 29/30" },
                        { "label": "OD 40 +/- 1MM", "name": "OD 40 +/- 1MM" },
                        { "label": "LENGTH 142 +/- 1 MM", "name": "LENGTH 142 +/- 1 MM" }
                    ]
                },
                {
                    "name": "6 Inch Display with wire (one side)",
                    "code": "RM252",
                    "fields": [
                        { "label": "Make FLUXION", "name": "Make FLUXION" }
                        
                    ]
                },
                {
                    "name": "CORKOT -B",
                    "code": "RM254",
                    "fields": [
                        { "label": "QTY CHECK OK", "name": "QTY CHECK OK" }
                      
                    ]
                },
                {
                    "name": "PLASTIC TRAY 542 LX 360 B X 292 H MM",
                    "code": "RM263",
                    "fields": [
                        { "label": "DIMENTION 542 LX 360 B X 292 H MM", "name": "DIMENTION 542 LX 360 B X 292 H MM" },
                        { "label": "MODEL NO. 1976 - TPC COLOR - MILITRY GREEN , PINK &  BROWN", "name": "MODEL NO. 1976 - TPC COLOR - MILITRY GREEN , PINK &  BROWN" }
                       
                    ]
                },
                {
                    "name": "MD Fuse Assembly Machine",
                    "code": "RM268",
                    "fields": [
                        { "label": "As per your offer ref: PPA/2024-25/022/RO 18/04/2024", "name": "As per your offer ref: PPA/2024-25/022/RO 18/04/2024" }
                        
                    ]
                },
                {
                    "name": "LCD DISPLAY",
                    "code": "RP001",
                    "fields": [
                        { "label": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE", "name": "ACCEPTANCE ON THE TEST CERTIFICATE:- TEST CERTIFICATE" }
                      
                    ]
                },
                {
                    "name": "CARD SEAT  Manis Temp. Indicator with Ethernet (Lan) Interface",
                    "code": "RP002",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate ", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT  Manis Temp. Indi.with timer/pendant switch",
                    "code": "RP003",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT Micro Manis Temp. Indicator",
                    "code": "RP004",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT MICRO PORT. TEMP.INDICATOR",
                    "code": "RP005",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT Micro Port.Temp.Indicator/Wifi  PORTABLE",
                    "code": "RP006",
                    "fields":[
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT Four Inch Micro Manis Temp. Indicator RS485",
                    "code": "RP007",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "ALUMINIUM CASTING FOR MICRO PORTABLE",
                    "code": "RP008",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:- NILL", "name": "ONLY QTY.TO BE CHECKING:- NILL" },
                        { "label": " SURFACE FINISH", "name": " SURFACE FINISH" },
                        { "label": " QUALITY OF PAINT NO PEELE OFF", "name": " QUALITY OF PAINT NO PEELE OFF" }
                    ]
                },
                {
                    "name": "MOTHER BOARD FOR 4 inch MICRO MAINS INDICATOR",
                    "code": "RP009",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "CARD SEAT Four Inch Micro Manis Temp. Indicator with 4-20 interface card",
                    "code": "RP010",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "Alloy wire",
                    "code": "RP012",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:- OK", "name": "ONLY QTY. TO BE CHECKING:- OK" }
                        
                    ]
                },
                {
                    "name": "MOTHER BOARD 4 inch MICRO MAINS TEMP.PCB.ASSE",
                    "code": "RP013",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "MOTHER BOARD MICRO PORTABLE PCB.ASSE",
                    "code": "RP015",
                    "fields": [
                        { "label": "MAKE FLUXION", "name": "MAKE FLUXION" }
                      
                    ]
                },
                {
                    "name": "DISPLAY BOARD 4 inch MICRO MAINS TEMP.PCB.ASSE",
                    "code": "RP016",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Mfgr's Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "INDUCTION MOTOR 2.2 KW 3PHASE TUBE DESCHARGER OLD CHINA WINDER",
                    "code": "RP025",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:- YES", "name": "ONLY QTY. TO BE CHECKING:- YES" }
                        
                    ]
                },
                {
                    "name": "DIA 6 inch FLAP WHEEL FOR OLD CHINA WINDER",
                    "code": "RP026",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:- YES", "name": "ONLY QTY. TO BE CHECKING:- YES" }
                        
                    ]
                },
                {
                    "name": "PCB PROGRAMER IC",
                    "code": "RP027",
                    "fields": [
                        { "label": "Acceptance On  Test Certificate:- Test Certificate", "name": "Acceptance On  Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "S&P PLASTIC BODY THERMOCOUPLE TYPE B STEEL CAP",
                    "code": "RP028",
                    "fields": [
                        { "label": "Plastic Body White color marked with a black line,Pt6%Rh/Pt30%", "name": "Plastic Body White color marked with a black line,Pt6%Rh/Pt30%" }
                        
                    ]
                },
                {
                    "name": "SMPS 24 V 6.5 AMP OLD CHINA WINDER",
                    "code": "RP029",
                    "fields": [
                        { "label": "Ceramic  Body White color marked with a black line,Pt6%Rh/Pt30%R", "name": "Ceramic  Body White color marked with a black line,Pt6%Rh/Pt30%R" }
                       
                    ]
                },
                {
                    "name": "CARD SEAT Micro Port.Temp.Indicator/Wifi Gateway",
                    "code": "RP038",
                    "fields": [
                        { "label": "Acceptance On The Basis Of Test Certificate:- Test Certificate", "name": "Acceptance On The Basis Of Test Certificate:- Test Certificate" }
                        
                    ]
                },
                {
                    "name": "ARALDIATE",
                    "code": "RT001",
                    "fields": [
                        { "label": "Make ARALDIATE", "name": "Make ARALDIATE" }
                        
                    ]
                },
                {
                    "name": "STEEL CAP -RI",
                    "code": "RT002",
                    "fields": [
                        { "label": "ONLY QTY.TO CHECKING YES", "name": "ONLY QTY.TO CHECKING YES" }
                      
                    ]
                },
                {
                    "name": "SAMPLAR QUARTZ TUBE 34 MM",
                    "code": "RT003",
                    "fields": [
                        { "label": "Length 34 mm + 1 mm", "name": "Length 34 mm + 1 mm" }
                       
                    ]
                },
                {
                    "name": "Copper Wire - 20 Guage",
                    "code": "RT004",
                    "fields": [
                        { "label": "Diameter 0.99 mm  - 0.1 mm", "name": "Diameter 0.99 mm  - 0.1 mm" },
                        { "label": "Mv  at 200 dc Generated When +/- 0.05 MV MAX.", "name": "Mv  at 200 dc Generated When +/- 0.05 MV MAX." }
                        
                    ]
                },
                {
                    "name": "STEEL CAP ( CAPSULES CAP TIN )",
                    "code": "RT005",
                    "fields": [
                        { "label": "Hole  Dia 3 MM + 1 MM", "name": "Hole  Dia 3 MM + 1 MM" },
                        { "label": "Diameter [Base] 14.8 mm - 0.1 mm", "name": "Diameter [Base] 14.8 mm - 0.1 mm" },
                        { "label": "Height 25 MM  + 1 MM", "name": "Height 25 MM  + 1 MM" }
                    ]
                },
                {
                    "name": "PLASTIC HOUSING - 1335 FR",
                    "code": "RT006",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:- OK", "name": "ONLY QTY.TO BE CHECKING:- OK" }
                      
                    ]
                },
                {
                    "name": "PLASTIC CAPS",
                    "code": "RT007",
                    "fields": [
                        { "label": "As Per Drawing No: ID 13.7+0.1 -0.0MM mm", "name": "As Per Drawing No: ID 13.7+0.1 -0.0MM mm" },
                        { "label": " Height 20.7 +/- 0.2", "name": " Height 20.7 +/- 0.2" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "QUARTZ TUBE For Sampler (8 * 6 MM )",
                    "code": "RT008",
                    "fields": [
                        { "label": "Inner Diameter 6 MM +/- 0.1", "name": "Inner Diameter 6 MM +/- 0.1" },
                        { "label": "Outer Diameter 8 MM +/- 0.1", "name": "Outer Diameter 8 MM +/- 0.1" },
                        { "label": "Length 2500 MM +/- 1 MM", "name": "Length 2500 MM +/- 1 MM" },
                        { "label": "Ends OK", "name": "Ends OK" }
                    ]
                },
                {
                    "name": "Solder Wire (Metalloy)",
                    "code": "RT009",
                    "fields": [
                        { "label": "Make Metalloys", "name": "Make Metalloys" }
                        
                    ]
                },
                {
                    "name": "Steel Cap",
                    "code": "RT010",
                    "fields": [
                        { "label": "Hole Dia 3 MM + 1 MM", "name": "Hole Dia 3 MM + 1 MM" },
                        { "label": " Diameter [Base] 28.3 mm  - 0. 3 mm", "name": " Diameter [Base] 28.3 mm  - 0. 3 mm" },
                        { "label": "Height 24.9 MM  + 1 MM - 0.2 mm", "name": "Height 24.9 MM  + 1 MM - 0.2 mm" }
                    ]
                },
                {
                    "name": "Platinum Wire (13 %) - 0.03mm",
                    "code": "RT011",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.03 mm +/- 0.001 mm", "name": "Diameter 0.03 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature", "name": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature" }
                    ]
                },
                {
                    "name": "Platinum Wire  ( 13 % )  - 0.04mm",
                    "code": "RT012",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.04 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature", "name": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DNC 50 80 PPVA FOR SAMPLER TUBE WINDER",
                    "code": "RT013",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.05 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" }
                        
                    ]
                },
                {
                    "name": "Rhodium 13 % Wire - 0.03 mm",
                    "code": "RT014",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.03 mm +/- 0.001 mm", "name": "Diameter 0.03 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature", "name": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature" }
                    ]
                },
                {
                    "name": "Rhodium 13 % Wire - 0.04 mm",
                    "code": "RT015",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.04 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature", "name": "Standard ITS - 90  +/- (1+0.003 ( t - 1100 ) WHERE  t = Measurement Temperature" }
                    ]
                },
                {
                    "name": "CLUTCH BEARING OLD CHINA WINDER",
                    "code": "RT016",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.05 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" }
                        
                    ]
                },
                {
                    "name": "Rhodium 10 % Wire - 0.03 mm",
                    "code": "RT017",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare  pair & give batch no before storage", "name": "Batch To pripare  pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.03 mm +/- 0.001 mm", "name": "Diameter 0.03 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm", "name": "Pt/Ptrh Spool Diameter 120 mm +/- 1 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" }
                        
                    ]
                },
                {
                    "name": "RED COATING (STICKHARD S)",
                    "code": "RT018",
                    "fields": [
                        { "label": "SHELF FIFE CHECK SHELF LIFE", "name": "SHELF FIFE CHECK SHELF LIFE" }
                        
                    ]
                },
                {
                    "name": "PLASTIC HOUSING - GREEN",
                    "code": "RT019",
                    "fields": [
                        { "label": "Only Qty. Check Only Qty. Check", "name": "Only Qty. Check Only Qty. Check" }
                       
                    ]
                },
                {
                    "name": "MO005150 Molybdenum - Wire (MO)",
                    "code": "RT020",
                    "fields": [
                        { "label": "Temper Annealed", "name": "Temper Annealed" },
                        { "label": " Diameter 0.5 MIM +/- 10 %", "name": " Diameter 0.5 MIM +/- 10 %" },
                        { "label": " Purity 99.95%", "name": " Purity 99.95%" },
                        { "label": " Length 200 Mtr +5% / -1%", "name": " Length 200 Mtr +5% / -1%" }
                    ]
                },
                {
                    "name": "COOPER ROD STRIGHT for S & P 4 MM",
                    "code": "RT021",
                    "fields": [
                        { "label": "OD 4 MM +/- 0.1 MM", "name": "OD 4 MM +/- 0.1 MM" }
                       
                    ]
                },
                {
                    "name": "PLASTIC HOUSING",
                    "code": "RT022",
                    "fields": [
                        { "label": "ONLY QTY.TO.BE.CHECKING:- OK", "name": "ONLY QTY.TO.BE.CHECKING:- OK" }
                       
                    ]
                },
                {
                    "name": "GF 15 H NATURAL",
                    "code": "RT023",
                    "fields": [
                        { "label": "TEST CERTIFICATE MFG. TEST CERTIFICATE", "name": "TEST CERTIFICATE MFG. TEST CERTIFICATE" },
                        { "label": " GF 15  NATURAL GF 15 H NATURAL", "name": " GF 15  NATURAL GF 15 H NATURAL" }
                        
                    ]
                },
                {
                    "name": "COPPER  ROD   STRAIGHT 6 MM (REGULAR)",
                    "code": "RT024",
                    "fields": [
                        { "label": "OD 6 MM +/- 0.1 MM", "name": "OD 6 MM +/- 0.1 MM" },
                        { "label": "CHECKING BY VENDOR Sign on challon", "name": "CHECKING BY VENDOR Sign on challon" }
                        
                    ]
                },
                {
                    "name": "PLASTIC HOUSING - FR1335 (SALE)",
                    "code": "RT026",
                    "fields": [
                        { "label": "DAIMETER 1.6 MM  -0.05 MM", "name": "DAIMETER 1.6 MM  -0.05 MM" },
                        { "label": " MV GENERATED WHEN 0.05 MV MAX", "name": " MV GENERATED WHEN 0.05 MV MAX" }
                        
                    ]
                },
                {
                    "name": "RED COATING",
                    "code": "RT027",
                    "fields": [
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "PLASTIC HOUSING - BROWN",
                    "code": "RT028",
                    "fields": [
                        { "label": "CHECKING BY VENDOR:- VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR:- VENDOR TEST CERTIFICATE" }
                       
                    ]
                },
                {
                    "name": "SAMPLER STEEL CAP",
                    "code": "RT030",
                    "fields": [
                        { "label": "ONLY QTY. TO CHECKING OK", "name": "ONLY QTY. TO CHECKING OK" }
                     
                    ]
                },
                {
                    "name": "CAL-AL - 70",
                    "code": "RT031",
                    "fields": [
                        { "label": "TEST CERTIFICATE With each lot of suplly", "name": "TEST CERTIFICATE With each lot of suplly" },
                        { "label": "SHELF LIFE CHECK SHELF LIFE", "name": "SHELF LIFE CHECK SHELF LIFE" },
                        { "label": "TIPS CASTING TEST After checking 1000 tips", "name": "TIPS CASTING TEST After checking 1000 tips" },
                         { "label": "Feed Back Feedback 2 SR In writing", "name": "Feed Back Feedback 2 SR In writing" }
                    ]
                },
                {
                    "name": "CAL-AL/70/75/85",
                    "code": "RT032",
                    "fields": [
                        { "label": "Dimetre (Base) 38.7 +/- 0.5 MM", "name": "Dimetre (Base) 38.7 +/- 0.5 MM" },
                        { "label": "Height 20.5 +/- 0.5 mm", "name": "Height 20.5 +/- 0.5 mm" }
                        
                    ]
                },
                {
                    "name": "STEEL CAP (sales)",
                    "code": "RT034",
                    "fields": [
                        { "label": "Dimeter 1.29 - 0.1 mm", "name": "Dimeter 1.29 - 0.1 mm" },
                        { "label": "MV Generated on jig 0.04 mv", "name": "MV Generated on jig 0.04 mv" },
                        { "label": "CHECKING BY SSK Sing on CHALLAN", "name": "CHECKING BY SSK Sing on CHALLAN" }
                    ]
                },
                {
                    "name": "CU -1.62 mm wire on spool",
                    "code": "RT035",
                    "fields": [
                        { "label": "Dimeter 1.62 - 0.1 mm", "name": "Dimeter 1.62 - 0.1 mm" },
                        { "label": "MV Ganarated on MV source:-0.05 mv", "name": "MV Ganarated on MV source:-0.05 mv" }
                        
                    ]
                },
                {
                    "name": "CA25R cement Alcoa",
                    "code": "RT036",
                    "fields": [
                        { "label": "Actual use for 2000 tips setting time 6 minutes", "name": "Actual use for 2000 tips setting time 6 minutes" }
                        
                    ]
                },
                {
                    "name": "Chamotte Clayrac -43-0/0.2-V Sc25/PcTH/1.200 102919",
                    "code": "RT037",
                    "fields": [
                        { "label": "ONLY QTY.TO CHECKING YES", "name": "ONLY QTY.TO CHECKING YES" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" },
                        { "label": "TIPS CASTING TEST After Checking 1000 TIPS", "name": "TIPS CASTING TEST After Checking 1000 TIPS" },
                        { "label": "Feed Back Feedback 2 SR In writing", "name": "Feed Back Feedback 2 SR In writing" }
                       
                    ]
                },
                {
                    "name": "PLASTIC HOUSING - DARK YELLOW",
                    "code": "RT039",
                    "fields": [
                        { "label": "checking :- ok", "name": "checking :- ok" }
                       
                    ]
                },
                {
                    "name": "METHYLENE CHLORIDE",
                    "code": "RT040",
                    "fields": [
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                       
                    ]
                },
                {
                    "name": "Rhodium 10 % Wire - 0.04 mm",
                    "code": "RT041",
                    "fields": [
                        { "label": "Diameter 0.040 mm +/- 0.01 mm", "name": "Diameter 0.040 mm +/- 0.01 mm" },
                        { "label": "Match Milivolts = 0.05 mv", "name": "Match Milivolts = 0.05 mv" },
                        { "label": "Checking by ssk sing. on challan", "name": "Checking by ssk sing. on challan" },
                         { "label": "Pt/Ptrh spool diameter 120+/- 1 mm", "name": "Pt/Ptrh spool diameter 120+/- 1 mm" },
                        { "label": "Flame Test Gas flame test to confrom to 0.05 mv", "name": "Flame Test Gas flame test to confrom to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                         { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                    ]
                },
                {
                    "name": "PLASTIC HOUSING RED ( S & P )",
                    "code": "RT043",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:-YES", "name": "ONLY QTY.TO BE CHECKING:-YES" }
                        
                    ]
                },
                {
                    "name": "PLASTIC HOUSING WHITE ( S & P )",
                    "code": "RT044",
                    "fields":  [
                        { "label": "ONLY QTY.TO BE CHECKING:-YES", "name": "ONLY QTY.TO BE CHECKING:-YES" }
                        
                    ]
                },
                {
                    "name": "21 U bend quartz tube for (s & p ) (18.5)",
                    "code": "RT045",
                    "fields": [
                        { "label": "DISTANCE BETWEEN 2 LEGS:-5 MM + /- 0.45", "name": "DISTANCE BETWEEN 2 LEGS:-5 MM + /- 0.45" },
                        { "label": "HEIGHT OF LONG LEG U (IN MM):-21 U +/- 0.6", "name": "HEIGHT OF LONG LEG U (IN MM):-21 U +/- 0.6" },
                        { "label": "ENDS FINISH", "name": "ENDS FINISH" },
                         { "label": "AS PER DRAWING DRG. NO/54", "name": "AS PER DRAWING DRG. NO/54" }
                    ]
                },
                {
                    "name": "QUARTZ TUBE For Sampler (9 * 7 MM )",
                    "code": "RT046",
                    "fields": [
                        { "label": "Inner Diameter 8 MM +/- 0.02", "name": "Inner Diameter 8 MM +/- 0.02" },
                        { "label": "Outer Diameter 9 MM +/- 0.02", "name": "Outer Diameter 9 MM +/- 0.02" },
                        { "label": "Length 3100 MM +/- 1 MM", "name": "Length 3100 MM +/- 1 MM" },
                        { "label": "Ends OK", "name": "Ends OK" }
                    ]
                },
                {
                    "name": "SAMPLER STEEL CAP 2 IN ONE",
                    "code": "RT054",
                    "fields": [
                        { "label": "AS PER SAMPLE OK", "name": "AS PER SAMPLE OK" }
                      
                    ]
                },
                {
                    "name": "Platinum 6%Rhpt-0.04mm",
                    "code": "RT058",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.04 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS-90", "name": "Standard ITS-90" }
                    ]
                },
                {
                    "name": "platinum 30%Rhpt-0.04mm",
                    "code": "RT059",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.04 mm +/- 0.001 mm", "name": "Diameter 0.04 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS-90", "name": "Standard ITS-90" }
                    ]
                },
                {
                    "name": "Platinum Wire (10 %) - 0.03",
                    "code": "RT060",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.030 mm +/- 0.001 mm", "name": "Diameter 0.030 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" },
                        { "label": "UTS RANGE 56-70KGS/MM2", "name": "UTS RANGE 56-70KGS/MM2" },
                        { "label": "Standard ITS-90", "name": "Standard ITS-90" }
                    ]
                },
                {
                    "name": "Platinum Wire ( 10 % ) - 0.04",
                    "code": "RT061",
                    "fields":  [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.040 mm +/- 0.001 mm", "name": "Diameter 0.040 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" }
                       
                    ]
                },
                {
                    "name": "LABOUR-CSA",
                    "code": "RT062",
                    "fields":  [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.050 mm +/- 0.001 mm", "name": "Diameter 0.050 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" }
                       
                    ]
                },
                {
                    "name": "LABOUR-LANCE ASSEMBLY",
                    "code": "RT063",
                    "fields": [
                        { "label": "Flame Test Gas flame test to conform to 0.05 mv", "name": "Flame Test Gas flame test to conform to 0.05 mv" },
                        { "label": "Batch To pripare pair & give batch no before storage", "name": "Batch To pripare pair & give batch no before storage" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" },
                        { "label": "Diameter 0.050 mm +/- 0.001 mm", "name": "Diameter 0.050 mm +/- 0.001 mm" },
                        { "label": "Match Millivolts=0.05mv", "name": "Match Millivolts=0.05mv" },
                        { "label": "Checking By Ssk Sign on challon", "name": "Checking By Ssk Sign on challon" },
                        { "label": "Pt/Ptrh Spool Diameter 120 mm", "name": "Pt/Ptrh Spool Diameter 120 mm" }
                       
                    ]
                },
                {
                    "name": "HIPS SH300",
                    "code": "RT064",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:-OK", "name": "ONLY QTY.TO BE CHECKING:-OK" },
                        { "label": "TEST CERTIFICATE OK", "name": "TEST CERTIFICATE OK" },
                        { "label": "GRADE SH 03 / SH 300", "name": "GRADE SH 03 / SH 300" }
                    ]
                },
                {
                    "name": "HIPS SP 5566 ( FR ) SUPREME",
                    "code": "RT065",
                    "fields":[
                        { "label": "ONLY QTY.TO BE CHECKING:-OK", "name": "ONLY QTY.TO BE CHECKING:-OK" },
                        { "label": "TEST CERTIFICATE OK", "name": "TEST CERTIFICATE OK" },
                        { "label": "GRADE SUPREME HIPS SP 5566 ( FR )", "name": "GRADE SUPREME HIPS SP 5566 ( FR )" }
                    ]
                },
                {
                    "name": "ALUMINIUM CAP",
                    "code": "RT066",
                    "fields": [
                        { "label": "Thickness 0.20MM + 0.05", "name": "Thickness 0.20MM + 0.05" },
                        { "label": "Drawing As per sample", "name": "Drawing As per sample" }
                        
                    ]
                },
                {
                    "name": "GF 30 % BLACK",
                    "code": "RT067",
                    "fields": [
                        { "label": "QTY.CHECK QTY.CHECK", "name": "QTY.CHECK QTY.CHECK" }
                       
                    ]
                },
                {
                    "name": "COPPER WIRE 1.29 MM",
                    "code": "RT068",
                    "fields": [
                        { "label": "Diameter 1.29 MM - 0.05 MM", "name": "Diameter 1.29 MM - 0.05 MM" }
                       
                    ]
                },
                {
                    "name": "STEEL CAP (CAPSUL CAP TIN PLATED)",
                    "code": "RT071",
                    "fields": [
                        { "label": "Hole Dia 3 MM + 1 MM", "name": "Hole Dia 3 MM + 1 MM" },
                        { "label": "Diameter [Base] 14.8 mm - 0.1 mm", "name": "Diameter [Base] 14.8 mm - 0.1 mm" },
                        { "label": "Height 25 MM + 1 MM", "name": "Height 25 MM + 1 MM" }
                    ]
                },
                {
                    "name": "STEEL CAP (CAPSUL CAP ALLUMINUM)",
                    "code": "RT072",
                    "fields": [
                        { "label": "Hole Dia 3 MM + 1 MM", "name": "Hole Dia 3 MM + 1 MM" },
                        { "label": "Diameter [Base] 14.8 mm - 0.1 mm", "name": "Diameter [Base] 14.8 mm - 0.1 mm" },
                        { "label": "Height 25 MM + 1 MM", "name": "Height 25 MM + 1 MM" }
                    ]
                },
                {
                    "name": "NYLONE NATURAL - 6",
                    "code": "RT074",
                    "fields": [
                        { "label": "TEST CERTIFICATE MFG.TEST CERTIFICATE", "name": "TEST CERTIFICATE MFG.TEST CERTIFICATE" },
                        { "label": "NYLON NATURAL", "name": "NYLON NATURAL" }
                        
                    ]
                },
                {
                    "name": "FILL CEMENT (TIPMIX SPECIAL)",
                    "code": "RT075",
                    "fields": [
                        { "label": "ONLY OTY. TO BE CHECKING:-OK", "name": "ONLY OTY. TO BE CHECKING:-OK" }
                        
                    ]
                },
                {
                    "name": "Steel Cap Thermocouples Type S Ceramic design",
                    "code": "RT076",
                    "fields": [
                        { "label": "ONLY OTY. TO BE CHECKING:-OK", "name": "ONLY OTY. TO BE CHECKING:-OK" }
                        
                    ]
                },
                {
                    "name": "LM BEARING 50 UU WITHOUT FLANGE OLD CHINA WINDER",
                    "code": "WC001",
                    "fields": [
                        { "label": "LENGTH 50 MM +/- 0.5", "name": "LENGTH 50 MM +/- 0.5" },
                        { "label": "ENDS FINISHING", "name": "ENDS FINISHING" }
                       
                    ]
                },
                {
                    "name": "LABOUR-COPER PIPE FOR TIP HOLDER",
                    "code": "WC002",
                    "fields": [
                        { "label": "Hts-Kg/Cm2 32 min", "name": "Hts-Kg/Cm2 32 min" },
                        { "label": "Mesh (Afs) 80 min.", "name": "Mesh (Afs) 80 min." },
                        { "label": "Test Certificate With each lot of supply", "name": "Test Certificate With each lot of supply" },
                        { "label": "Checking By Ssk sign.on the challon", "name": "Checking By Ssk sign.on the challon" }
                    ]
                },
                {
                    "name": "T1T2 Welded Wire - 26 Guage-New Super (R)",
                    "code": "WC005",
                    "fields": [
                        { "label": "STRENGTH ON WELDING WELDING NOT TO BE BREAK", "name": "STRENGTH ON WELDING WELDING NOT TO BE BREAK" },
                        { "label": "T 1 ON ONE SIDE NEGATIVE", "name": "T 1 ON ONE SIDE NEGATIVE" },
                        { "label": "T 2 ON ANOTHER SIDE POSITIVE", "name": "T 2 ON ANOTHER SIDE POSITIVE" },
                        { "label": "LENGTH 62 MM + 1 MM", "name": "LENGTH 62 MM + 1 MM" },
                        { "label": "CHECK BATCH NO YES", "name": "CHECK BATCH NO YES" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO 63 50 PPV A FOR SAMPLER WINDER",
                    "code": "WC006",
                    "fields": [
                        { "label": "HTS-KG/CM2 MINIMUM 32", "name": "HTS-KG/CM2 MINIMUM 32" },
                        { "label": "MESH - AFS 65 -75", "name": "MESH - AFS 65 -75" },
                        { "label": "TEST CERTIFICATE AVAILABAL", "name": "TEST CERTIFICATE AVAILABAL" },
                        { "label": "CHECKING BY SSK. SING. ON THE BILL", "name": "CHECKING BY SSK. SING. ON THE BILL" }
                    ]
                },
                {
                    "name": "AIR CYLINDER FESTO DSNU 40 100 PA FOR SAMPLER WINDER",
                    "code": "WC007",
                    "fields": [
                        { "label": "STRENGTH ON WELDING WELDING NOT TO BE BREAK", "name": "STRENGTH ON WELDING WELDING NOT TO BE BREAK" },
                        { "label": "T 1 ON ONE SIDE NEGATIVE", "name": "T 1 ON ONE SIDE NEGATIVE" },
                        { "label": "T 2 ON ANOTHER SIDE POSITIVE", "name": "T 2 ON ANOTHER SIDE POSITIVE" }
                    ]
                },
                {
                    "name": "T1T2 Welded Wire - 26 Guage-2Te (SQ)",
                    "code": "WC008",
                    "fields": [
                     { "label": "STRENGTH ON WELDING WELDING NOT TO BE BREAK", "name": "STRENGTH ON WELDING WELDING NOT TO BE BREAK" },
                        { "label": "T 1 ON ONE SIDE NEGATIVE", "name": "T 1 ON ONE SIDE NEGATIVE" },
                        { "label": "T 2 ON ANOTHER SIDE POSITIVE", "name": "T 2 ON ANOTHER SIDE POSITIVE" },
                        { "label": "LENGTH 92 MM +/ 1 MM", "name": "LENGTH 92 MM +/ 1 MM" },
                        { "label": "CHECK BATCH NO YES", "name": "CHECK BATCH NO YES" }
                        
                    ]
                },
                {
                    "name": "46 MM",
                    "code": "WC009",
                    "fields": [
                        { "label": "LENGTH 46 +/- 0.5MM", "name": "LENGTH 46 +/- 0.5MM" },
                        { "label": "ENDS OK", "name": "ENDS OK" }
                        
                    ]
                },
                {
                    "name": "T1T2WELDED WIRE 26 GUAGE SUPER (R)",
                    "code": "WC010",
                    "fields": [
                     { "label": "STRENGTH ON WELDING WELDING NOT TO BE BREAK", "name": "STRENGTH ON WELDING WELDING NOT TO BE BREAK" },
                        { "label": "T 1 ON ONE SIDE NEGATIVE", "name": "T 1 ON ONE SIDE NEGATIVE" },
                        { "label": "T 2 ON ANOTHER SIDE POSITIVE", "name": "T 2 ON ANOTHER SIDE POSITIVE" },
                        { "label": "LENGTH 68 MM +/ 1 MM", "name": "LENGTH 68 MM +/ 1 MM" },
                        { "label": "CHECK BATCH NO YES", "name": "CHECK BATCH NO YES" }
                        
                    ]
                },
                {
                    "name": "Paper tubes - 1 FT.",
                    "code": "WM001",
                    "fields": [
                        { "label": "LENGTH 250 MM TO 275 MM", "name": "LENGTH 250 MM TO 275 MM" }
                        
                    ]
                },
                {
                    "name": "Paper tubes - 2 FT.",
                    "code": "WM002",
                    "fields": [
                        { "label": "LENGTH 540 MM TO 5 MM", "name": "LENGTH 540 MM TO 5 MM" }
                        
                    ]
                },
                {
                    "name": "Paper tubes - 3 FT",
                    "code": "WM003",
                    "fields": [
                        { "label": "Length 750 +/- 2 mm", "name": "Length 750 +/- 2 mm" }
                        
                    ]
                },
                {
                    "name": "LABOUR - SQUARE & NEW CUP",
                    "code": "WM004",
                    "fields": [
                        { "label": "Length 150 +/- 2mm", "name": "Length 150 +/- 2mm" }
                        
                    ]
                },
                {
                    "name": "LABOUR-PAPER TUBE WINDER",
                    "code": "WM006",
                    "fields": [
                        { "label": "INNER DIAMETER 18.6", "name": "INNER DIAMETER 18.6" },
                        { "label": "OUTER DIAMETER 31.5", "name": "OUTER DIAMETER 31.5" },
                        { "label": "LENGTH 13", "name": "LENGTH 13" }
                    ]
                },
                {
                    "name": "Paper tubes - 540 mm",
                    "code": "WM007",
                    "fields": [
                        { "label": "LENGTH 540 MM +/- 2 MM", "name": "LENGTH 540 MM +/- 2 MM" }
                        
                    ]
                },
                {
                    "name": "Paper tubes - 850 mm",
                    "code": "WM008",
                    "fields": [
                        { "label": "Height Of Nylon 20 mm +/- 0.5 mm", "name": "Height Of Nylon 20 mm +/- 0.5 mm" },
                        { "label": "Height Of Copper Pipe 9 MM +/- 0.2 MM", "name": "Height Of Copper Pipe 9 MM +/- 0.2 MM" },
                        { "label": "Height Of Copper Rod 11 MM +/- 0.2 MM", "name": "Height Of Copper Rod 11 MM +/- 0.2 MM" }
                    ]
                },
                {
                    "name": "PLASTIC TAPER WITH PINS-BIG RING",
                    "code": "WM009",
                    "fields": [
                        { "label": "HEIGHT OF TAPER 38.3 +/- 1 MM", "name": "HEIGHT OF TAPER 38.3 +/- 1 MM" },
                        { "label": "ID 8.4 +/- 0.2 MM", "name": "ID 8.4 +/- 0.2 MM" },
                        { "label": "HEIGHT OF COPPER & CONSTANT PIN:- 8 MM +/- 1 MM", "name": "HEIGHT OF COPPER & CONSTANT PIN:- 8 MM +/- 1 MM" },
                        { "label": "LOCATION OF COPPER RIGHT HAND SIDE", "name": "LOCATION OF COPPER RIGHT HAND SIDE" },
                        { "label": "LOCATION OF CONSTANT LEFT HAND SIDE", "name": "LOCATION OF CONSTANT LEFT HAND SIDE" }
                    ]
                },
                {
                    "name": "PAPER TUBEFOR SAMPLER 39 ID *200 MM",
                    "code": "WM010",
                    "fields": [
                        { "label": "LENGTH 200 MM +/- 5 MM", "name": "LENGTH 200 MM +/- 5 MM" }
                       
                    ]
                },
                {
                    "name": "PAPER TUBE SAMPLER 1200 MM LENGTH",
                    "code": "WM011",
                    "fields": [
                        { "label": "LENGTH 1200 MM +/- 5 MM", "name": "LENGTH 1200 MM +/- 5 MM" }
                       
                    ]
                },
                {
                    "name": "Paper tubes - 1160 mm",
                    "code": "WM012",
                    "fields": [
                        { "label": "ID 6 MM +/- 0.1 MM", "name": "ID 6 MM +/- 0.1 MM" },
                        { "label": "OD 8 MM +/- 0.1 MM", "name": "OD 8 MM +/- 0.1 MM" },
                        { "label": "LENGTH 19 MM +/- 0.1", "name": "LENGTH 19 MM +/- 0.1" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "LABOUR-TIP HOLDER ASSEMBLY",
                    "code": "WM022",
                    "fields": [
                        { "label": "Length 750 +/- 2 mm", "name": "Length 750 +/- 2 mm" }
                       
                    ]
                },
                {
                    "name": "PAPER TUBE FOR SAMPLER 2 FT",
                    "code": "WM024",
                    "fields": [
                        { "label": "LENGTH 580 +/- 2 MM", "name": "LENGTH 580 +/- 2 MM" },
                        { "label": "LENGTH 500 MM +/- 5 MM", "name": "LENGTH 500 MM +/- 5 MM" },
                        { "label": "ID 39 +/- 0.1 MM", "name": "ID 39 +/- 0.1 MM" },
                        { "label": "OD 46 +/- 0.1 MM", "name": "OD 46 +/- 0.1 MM" },
                        { "label": "LENGTH 500 +/-0.1 MM", "name": "LENGTH 500 +/-0.1 MM" }
                    ]
                },
                {
                    "name": "PAPER TUBE 200 MM (HORIZONTAL)",
                    "code": "WM034",
                    "fields": [
                        { "label": "ID 30 MM +/- 0.1 MM", "name": "ID 30 MM +/- 0.1 MM" },
                        { "label": "OD 40.5 MM +/- 0.1 MM", "name": "OD 40.5 MM +/- 0.1 MM" },
                        { "label": "LENGTH 200 MM +/- 0.1", "name": "LENGTH 200 MM +/- 0.1" }
                    ]
                },
                {
                    "name": "PAPER TUBE 1160 MM (HORIZONTAL)",
                    "code": "WM035",
                    "fields": [
                        { "label": "OD 30 MM +/- 0.5 MM", "name": "OD 30 MM +/- 0.5 MM" },
                        { "label": "ID 18 MM +/- 0.5 MM", "name": "ID 18 MM +/- 0.5 MM" },
                        { "label": "LENGTH 1160 MM +/- 1 MM", "name": "LENGTH 1160 MM +/- 1 MM" }
                    ]
                },
                {
                    "name": "Bend of Alloy ( Constantan ) wire-0.77 MM",
                    "code": "WT001",
                    "fields": [
                        { "label": "LENGTH A 4.5 +/- 0.01", "name": "LENGTH A 4.5 +/- 0.01" },
                        { "label": "LENGTH B 2.4 +/- 0.01", "name": "LENGTH B 2.4 +/- 0.01" },
                        { "label": "LENGTH C 8.8 +/- 0.01", "name": "LENGTH C 8.8 +/- 0.01" },
                        { "label": "LENGTH D 25.0 +/- 0.01", "name": "LENGTH D 25.0 +/- 0.01" }
                       
                    ]
                },
                {
                    "name": "Bend of Copper ( Wire 20 guage )",
                    "code": "WT002",
                    "fields":  [
                        { "label": "LENGTH A 4.5 +/- 0.01", "name": "LENGTH A 4.5 +/- 0.01" },
                        { "label": "LENGTH B 2.4 +/- 0.01", "name": "LENGTH B 2.4 +/- 0.01" },
                        { "label": "LENGTH C 8.0 +/- 0.01", "name": "LENGTH C 8.0 +/- 0.01" },
                        { "label": "LENGTH D 32.0 +/- 0.01", "name": "LENGTH D 32.0 +/- 0.01" }
                       
                    ]
                },
                {
                    "name": "PLASTIC TAPERS WITH PINS-GH 15",
                    "code": "WT003",
                    "fields": [
                        { "label": "Height of Taper 25.5 mm +/- 1 mm", "name": "Height of Taper 25.5 mm +/- 1 mm" },
                        { "label": "I.D. 9 mm +/- 0.2 mm", "name": "I.D. 9 mm +/- 0.2 mm" },
                        { "label": "Height of Copper & Constantan Wire:-8 mm +/- 1 mm", "name": "Height of Copper & Constantan Wire:-8 mm +/- 1 mm" },
                        { "label": "Location of Copper wire Right hand Side", "name": "Location of Copper wire Right hand Side" },
                        { "label": "Location of Constantan wire Left hand side", "name": "Location of Constantan wire Left hand side" }
                    ]
                },
                {
                    "name": "PLASTIC TAPERS - BIG RING",
                    "code": "WT004",
                    "fields": [
                        { "label": "HEIGHT OF TAPER 38.3 +/- 1 mm", "name": "HEIGHT OF TAPER 38.3 +/- 1 mm" },
                        { "label": "ID 8.4 +/- 0.2MM", "name": "ID 8.4 +/- 0.2MM" },
                        { "label": "HEIGHT OF COPPER & CONSTANT PIN:-8 MM +/- 1 MM", "name": "HEIGHT OF COPPER & CONSTANT PIN:-8 MM +/- 1 MM" },
                        { "label": "LOCATION OF COPPER RIGHT HAND SIDE", "name": "LOCATION OF COPPER RIGHT HAND SIDE" },
                        { "label": "LOCATION OF CONSTANT LEFT HAND SIDE", "name": "LOCATION OF CONSTANT LEFT HAND SIDE" }
                    ]
                },
                {
                    "name": "30 U",
                    "code": "WT005",
                    "fields": [
                        { "label": "Inner Diameter 5MM +/- 0.5 MM", "name": "Inner Diameter 5MM +/- 0.5 MM" },
                        { "label": "Height Of U (In Mm) 30U. +/- 1 MM", "name": "Height Of U (In Mm) 30U. +/- 1 MM" },
                        { "label": "Ends OK", "name": "Ends OK" }
                    ]
                },
                {
                    "name": "CROME PLATED DISCHARGER G/B OUTPUT ROD FOR SAMPLER WINDER",
                    "code": "WT006",
                    "fields": [
                        { "label": "Distance Between 2 Legs 5MM +/- 0.5 MM", "name": "Distance Between 2 Legs 5MM +/- 0.5 MM" },
                        { "label": "Height Of U (In Mm) 21U. +/-0.5MM", "name": "Height Of U (In Mm) 21U. +/-0.5MM" },
                        { "label": "Ends OK", "name": "Ends OK" },
                        { "label": "LENGTH 75 MM +/- 1 MM", "name": "LENGTH 75 MM +/- 1 MM" }
                    ]
                },
                {
                    "name": "45 UWT007",
                    "code": "WT007",
                    "fields": [
                        { "label": "Inner Diameter 5MM +/- 0.5 MM.", "name": "Inner Diameter 5MM +/- 0.5 MM." },
                        { "label": "Height Of U (In Mm) 40U", "name": "Height Of U (In Mm) 40U" },
                        { "label": "Ends OK", "name": "Ends OK" }
                    ]
                },
                {
                    "name": "21 U QUARTZ TUBE BEND",
                    "code": "WT008",
                    "fields": [
                        { "label": "Length 60 MM +/-0.5", "name": "Length 60 MM +/-0.5" },
                        { "label": "Ends OK", "name": "Ends OK" }
                       
                    ]
                },
                {
                    "name": "PAPER TUBE 200 MM (cbe)",
                    "code": "WT009",
                    "fields":  [
                        { "label": "Length 80 MM +/-0.5", "name": "Length 80 MM +/-0.5" },
                        { "label": "Ends OK", "name": "Ends OK" }
                       
                    ]
                },
                {
                    "name": "1035 S & P CASTING 0.04",
                    "code": "WT010",
                    "fields": [
                        { "label": "POSITION OF U TUBE STREIGHT", "name": "POSITION OF U TUBE STREIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD SRENGTH", "name": "QUALITY OF CASTING NO CRACK & GOOD SRENGTH" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                         { "label": "WIRE RESISTANCE 11 +/- 0.2", "name": "WIRE RESISTANCE 11 +/- 0.2" }
                    ]
                },
                {
                    "name": "PAPER TUBE 2FT (CBE)",
                    "code": "WT011",
                    "fields": [
                        { "label": "Only Qty To Be Checked No checkig", "name": "Only Qty To Be Checked No checkig" }
                      
                    ]
                },
                {
                    "name": "1324 Plastic Bare",
                    "code": "WT012",
                    "fields": [
                        { "label": "Position Of U Tube Straight", "name": "Position Of U Tube Straight" },
                        { "label": "Quality Of Casting No Cracks & Good strength", "name": "Quality Of Casting No Cracks & Good strength" },
                        { "label": "Finishing Clean quartz tube", "name": "Finishing Clean quartz tube" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                    ]
                },
                {
                    "name": "1324 Die Bare Casting",
                    "code": "WT013",
                    "fields": [
                        { "label": "POSITION OF U TUBE STRAIGHT", "name": "POSITION OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGTH", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGTH" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "1324 Metal Cap Casting",
                    "code": "WT014",
                    "fields": [
                        { "label": "POSITION OF U TUBE STRAIGHT", "name": "POSITION OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK &GOOD STRAINGTH", "name": "QUALITY OF CASTING NO CRACK &GOOD STRAINGTH" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "Test Certificate Yes", "name": "Test Certificate Yes" }
                    ]
                },
                 {
                    "name": "1330 S and P Castings",
                    "code": "WT015",
                    "fields": [
                        { "label": "POSITION OF U TUBE STRAIGHT", "name": "POSITION OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING No Crack & Good Strength", "name": "QUALITY OF CASTING No Crack & Good Strength" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                         { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                 {
                    "name": "LABOUR CHARGES-MICROPORTABLE TEMP. INDICATOR",
                    "code": "WT016",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                 {
                    "name": "LABOUR - TIP HOLDER ASSEMBLY",
                    "code": "WT017",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                 {
                    "name": "1355 Castings",
                    "code": "WT018",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                 {
                    "name": "1324 SUYASH S& P METAL CAP FITTING",
                    "code": "WT019",
                    "fields": [
                        { "label": "CAP FITTING ROTED", "name": "CAP FITTING ROTED" }
                        
                    ]
                },
                 {
                    "name": "1024 Bare",
                    "code": "WT020",
                    "fields":  [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "SERVO MOTOR DELTA ECMA E11315RS FOR SAMPLER WINDER",
                    "code": "WT021",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                 {
                    "name": "30 U GLA.TUBE.",
                    "code": "WT022",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "PLASTIC TAPERS WITHOUT PINS - BIG RING",
                    "code": "WT023",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:-OK", "name": "ONLY QTY. TO BE CHECKING:-OK" }
                        
                    ]
                },
                {
                    "name": "LABOUR-COMP. CABLE CUTTING",
                    "code": "WT024",
                    "fields":  [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "LABOUR-T1T2 WIRE WELDING",
                    "code": "WT025",
                    "fields":  [
                        { "label": "ONLY QTY. TO BE CHECKING:-OK", "name": "ONLY QTY. TO BE CHECKING:-OK" }
                        
                    ]
                },
                {
                    "name": "1324 SUYASH S & P DIE BEAR CASTING",
                    "code": "WT026",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "WIRE RESISTANCE JOHNSON / HINDUSTAN:-JOHNSON (11.5 - 0.5 ) HINDUSTAN (12.5 - 0.5)", "name": "WIRE RESISTANCE JOHNSON / HINDUSTAN:-JOHNSON (11.5 - 0.5 ) HINDUSTAN (12.5 - 0.5)" }
                    ]
                },
                {
                    "name": "LABOUR CHARGES-1335 PACKING",
                    "code": "WT027",
                    "fields": [
                        { "label": "ONLY QTY. TO BE CHECKING:-OK", "name": "ONLY QTY. TO BE CHECKING:-OK" }
                        
                    ]
                },
                {
                    "name": "Bend of Copper Wire 1.62 MM (oxy probe )",
                    "code": "WT028",
                    "fields": [
                        { "label": "OD 1.62 MM -0.01 MM", "name": "OD 1.62 MM -0.01 MM" }
                        
                    ]
                },
                {
                    "name": "LED 7 SEG MENT FOR MICRO PORTABLE",
                    "code": "WT029",
                    "fields": [
                        { "label": "HEIGHT OF NYLON 20 MM +/-0.5", "name": "HEIGHT OF NYLON 20 MM +/-0.5" },
                        { "label": "HEIGHT OF COPPER PIPE 9 MM +/-0.5", "name": "HEIGHT OF COPPER PIPE 9 MM +/-0.5" },
                        { "label": "HEIGHT OF COPPER ROD 11 MM +/-0.5", "name": "HEIGHT OF COPPER ROD 11 MM +/-0.5" },
                        { "label": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE", "name": "CHECKING BY VENDOR VENDOR TEST CERTIFICATE" }
                    ]
                },
                {
                    "name": "PAPER TUBE 1 FT PARALLEL",
                    "code": "WT030",
                    "fields":[
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "33 MM",
                    "code": "WT031",
                    "fields": [
                        { "label": "LENGTH 33 MM +/- 0.5", "name": "LENGTH 33 MM +/- 0.5" },
                        { "label": "ENDS FINISH", "name": "ENDS FINISH" }
                       
                    ]
                },
                {
                    "name": "19 U",
                    "code": "WT032",
                    "fields": [
                        { "label": "DISTANCE BETWEEN 2 LEGS:-5 MM + /- 0.45", "name": "DISTANCE BETWEEN 2 LEGS:-5 MM + /- 0.45" },
                        { "label": "HEIGHT OF LONG LEG U (IN MM)19 U +/- 0.5", "name": "HEIGHT OF LONG LEG U (IN MM)19 U +/- 0.5" },
                        { "label": "ENDS FINISH", "name": "ENDS FINISH" },
                        { "label": "AS PER DRAWING DRG. NO/55", "name": "AS PER DRAWING DRG. NO/55" },
                        { "label": "ID 1.6 MM (- 0.1)", "name": "ID 1.6 MM (- 0.1)" },
                         { "label": "OD 3 MM (+ 0.1)", "name": "OD 3 MM (+ 0.1)" }
                    ]
                },
                {
                    "name": "37 MM",
                    "code": "WT033",
                    "fields": [
                        { "label": "LENGTH 37 +/-0.5", "name": "LENGTH 37 +/-0.5" },
                        { "label": "ENDS FINISH", "name": "ENDS FINISH" }
                        
                    ]
                },
                {
                    "name": "Bend of Alloy wire-1.29 MM (oxy probe )",
                    "code": "WT034",
                    "fields": [
                        { "label": "OD 1.29 MM - 0.01 MM", "name": "OD 1.29 MM - 0.01 MM" }
                       
                    ]
                },
                {
                    "name": "PAPER TUBE WINDER-18 ID-1790 mm-250 GSM",
                    "code": "WT035",
                    "fields": [
                        { "label": "ID 18.3 +/- 0.3 MM", "name": "ID 18.3 +/- 0.3 MM" },
                        { "label": "OD 29.5-31", "name": "OD 29.5-31" },
                        { "label": "LENGTH 1680 +/- 5 MM", "name": "LENGTH 1680 +/- 5 MM" }
                    ]
                },
                {
                    "name": "OVERHEADS",
                    "code": "WT036",
                    "fields": [
                        { "label": "ID 28 +/- 1 MM", "name": "ID 28 +/- 1 MM" },
                        { "label": "OD 39 +/-1 mm", "name": "OD 39 +/-1 mm" },
                        { "label": "LENGTH 910 +/- 0.5 mm", "name": "LENGTH 910 +/- 0.5 mm" }
                    ]
                },
                {
                    "name": "PAPER TUBE WINDER-18 ID-1790 mm- 325 GSM",
                    "code": "WT037",
                    "fields": [
                        { "label": "ID 28 +/- 0.1 MM", "name": "ID 28 +/- 0.1 MM" },
                        { "label": "OD 39 +/- 0.1 MM", "name": "OD 39 +/- 0.1 MM" },
                        { "label": "LENGTH 1210 +/- 2 MM", "name": "LENGTH 1210 +/- 2 MM" }
                    ]
                },
                {
                    "name": "LABOUR - TIPS PACKING",
                    "code": "WT039",
                    "fields": [
                        { "label": "FITTING NO GAP", "name": "FITTING NO GAP" }
                        
                    ]
                },
                {
                    "name": "LABOUR- Cu & Ctn Wire Cutting",
                    "code": "WT043",
                    "fields": [
                        { "label": "LENGTH A 8.8 +/- 0.1 mm", "name": "LENGTH A 8.8 +/- 0.1 mm" },
                        { "label": "LENGTH B 2.4 +/- 0.1 mm", "name": "LENGTH B 2.4 +/- 0.1 mm" },
                        { "label": "LENGTH C 25 +/- 0.1 mm", "name": "LENGTH C 25 +/- 0.1 mm" }
                    ]
                },
                {
                    "name": "USB 2 SERIAL BEFO",
                    "code": "WT044",
                    "fields": [
                        { "label": "LENGTH A 8.0 +/- 0.1 mm", "name": "LENGTH A 8.0 +/- 0.1 mm" },
                        { "label": "LENGTH B 2.4 +/- 0.1 mm", "name": "LENGTH B 2.4 +/- 0.1 mm" },
                        { "label": "LENGTH C 32.0 +/- 0.1 mm", "name": "LENGTH C 32.0 +/- 0.1 mm" }
                    ]
                },
                {
                    "name": "LABOUR - NORMAL TAPER WITH PIN",
                    "code": "WT047",
                    "fields": [
                        { "label": "ONLY QTY.TO BE CHECKING:-NULL", "name": "ONLY QTY.TO BE CHECKING:-NULL" }
                       
                    ]
                },
                {
                    "name": "10 % Tips casting Metal Cap - 0.03 mm - Suyash S&P",
                    "code": "WT049",
                    "fields": [
                        { "label": "CAP FITTING ROTED", "name": "CAP FITTING ROTED" }
                        
                    ]
                },
                {
                    "name": "LABOUR-PAPER TUBE CUTTING",
                    "code": "WT051",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "TEST CERTIFICATE YES", "name": "TEST CERTIFICATE YES" }
                    ]
                },
                {
                    "name": "1335 S and P Casting",
                    "code": "WT052",
                    "fields": [
                        { "label": "POSITIO OF U TUBE STRAIGHT", "name": "POSITIO OF U TUBE STRAIGHT" },
                        { "label": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT", "name": "QUALITY OF CASTING NO CRACK & GOOD STRENGHT" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "WIRE RESISTANCE 17 +/- 0.5", "name": "WIRE RESISTANCE 17 +/- 0.5" }
                    ]
                },
                {
                    "name": "PLASTIC TAPER WITH PIN ( BLACK )",
                    "code": "WT053",
                    "fields": [
                        { "label": "Height of Taper 25.5 mm +/- 1 mm", "name": "Height of Taper 25.5 mm +/- 1 mm" },
                        { "label": "I.D. 9 mm +/- 0.2 mm", "name": "I.D. 9 mm +/- 0.2 mm" },
                        { "label": "Height of Copper & Constantan Wire:-8 mm +/- 1 mm", "name": "Height of Copper & Constantan Wire:-8 mm +/- 1 mm" },
                        { "label": "Location of Copper wire Right hand Side", "name": "Location of Copper wire Right hand Side" },
                        { "label": "Location of Constantan wire Left hand side", "name": "Location of Constantan wire Left hand side" }
                    ]
                },
                {
                    "name": "S & P-Alloy 1.29-Cutting",
                    "code": "WT054",
                    "fields": [
                        { "label": "Lenth 32.5 MM +/-0.5 mm", "name": "Lenth 32.5 MM +/-0.5 mm" }
                        
                    ]
                },
                {
                    "name": "S & P-Copper 1.62-Cutting",
                    "code": "WT055",
                    "fields": [
                        { "label": "Length 32.5 MM +/-0.5 mm", "name": "Length 32.5 MM +/-0.5 mm" }
                       
                    ]
                },
                {
                    "name": "S & P-10 % Casting-0.03 mm without cap - WHITE TAPER",
                    "code": "WT067",
                    "fields": [
                        { "label": "Resistance Minimum", "name": "Resistance Minimum" },
                        { "label": "POSITION OF U TUBE STREIGTH", "name": "POSITION OF U TUBE STREIGTH" },
                        { "label": "QUALITY OF SASTING NO CRACK & GOODS STRENGTH", "name": "QUALITY OF SASTING NO CRACK & GOODS STRENGTH" },
                        { "label": "FINISHING CLEAN QUARTZ TUBE", "name": "FINISHING CLEAN QUARTZ TUBE" },
                        { "label": "WITR RESISTANCE 13 +/- 0.1", "name": "WITR RESISTANCE 13 +/- 0.1" }
                    ]
                },
                {
                    "name": "37.50 U for Ceramic",
                    "code": "WT068",
                    "fields": [
                        { "label": "Inner Diameter 5 MM +/-0.5", "name": "Inner Diameter 5 MM +/-0.5" },
                        { "label": "Height Of U (In mm) 37.50 U +/- 1 MM", "name": "Height Of U (In mm) 37.50 U +/- 1 MM" },
                        { "label": "Ends OK", "name": "Ends OK" }
                    ]
                },
                {
                    "name": "NYLON BRAKET (oxy probe)",
                    "code": "WT069",
                    "fields": [
                        { "label": "Only Qty. to be check Only Qty. to be Check", "name": "Only Qty. to be check Only Qty. to be Check" }
                       
                    ]
                },
                {
                    "name": "PLASTIC TAPERS -S&P CERAMIC-BLACK- GF 30%",
                    "code": "WT070",
                    "fields": [
                        { "label": "Only Qty. to be check Only Qty. to be check", "name": "Only Qty. to be check Only Qty. to be check" }
                        
                    ]
                },
                {
                    "name": "S&P Copper -1.29 Cutting",
                    "code": "WT071",
                    "fields": [
                        { "label": "Lenth 32.5 MM +/-0.5 mm", "name": "Lenth 32.5 MM +/-0.5 mm" }
                        
                    ]
                }
                
            ],
            "standardFields": [
                { "label": " Check 1", "name": "Check 1" },
                { "label": " Check 2", "name": "Check 2" },
                { "label": " Check 3", "name": "Check 3" }
            ]
        };
        // Options for each dropdown
        const nameOptions = ["Balu Limhan", "Pradeep Karlekar"];
        const supplierOptions = [
    "HINDUSTAN PLATINUM",
    "AARADHYA ENTERPRISES",
    "Dispotronics",
    "MARUTI ENTERPRISES",
    "ALFA TOOLS",
     "Venus International",
    "Oswal Daga Agencies",
    "Nagnath Lashkar -e",
    "Upasana Enterprises",
    "Sunkraft Industries-m",
    "Rungta electrical Industries -e",
    "Ganeshkrupa packaging",
    "Fluxion Process Solution -m",
    "Shreya System-e",
    "Accord Tech pvt. ltd.",
    "Alpha Engineers",
    "Chaneyco Refratech pvt. ltd.",
    "Raysons Sand Chem pvt. ltd.",
    "RESUCERIAL QUARTZ LIANYUNGANG IND.& TRADING CO.LTD",
    "Fortis Metals",
    "Sanduif Asia ltd(Kanthal Division)",
    "M.R Enterprises",
    "PayPay Instrumentation",
    "Turbo Electronic system",
    "Jai lakshmi Agro-chemical pvt. ltd.-e",
    "Twintech control system pvt. ltd.-e",
    "Rajendra industries-m",
    "Shah wadilal Narottamdas-m",
    "Rexor & Company INC",
    "Pandurang paper & board mill-m",
    "Syno plast",
    "RAINBOW COLOR PLAST",
    "S.K. Traders",
    "Sadguru Trading CORP. -e",
    "Changzhou foreign Trade CORP.",
    "Shree Datt Eng. works",
    "NAV Bharat trading company",
    "Bombay Silicate works-e",
    "Superb Components-m",
    "PLASTIC PRODUCTS -M",
    "PATIL INDUSTRIES",
    "SRI RAAM GOWRI HI-TECH POLYMERS P.LTDL - e",
    "JOHNSON MATTHEY PLC.",
    "IMERY REFRACTORY MINERALS (AGS MINERAUX)",
    "Almatis Alumina Pvt.Ltd. - e",
    "PRISM INDUSTRIES",
    "ASSOCIATED REFRACTORIES AND MINERALS (PUNE)",
    "PLASTIC PRODUCTS -M",
    "Goodfellow Cambridge Limited",
    "SHREE GURUDATTA INDUSTRIES PRIVATE LIMITED - e",
    "M-ALLOYS CORPORATION - e",
    "TULSI IMPEX",
    "NITYANAND ENTERPRISES. - e",
    "NAAM ENGINEERING ASSOCIATES",
    "SIMOND FIBERTECH LIMITED -m",
    "DKIC PRIVATE LIMITED. - e",
    "REXOR AND COMPANY INC",
    "Babji Tin Works",
    "Shakti Industries",
    "Refractory Udhyog",
    "Siddhakala Packaging",
    "Bethel Systems",
    "Iprint",
    "Shree Foundry Chemicals India pvt. ltd.",
    "Prism Cabel Company"
];
        const productOptions = productData.products.map(product => product.name);

        // Set default date to current date
        document.getElementById('date').value = new Date().toISOString().split('T')[0];

        // Function to handle 'other' option selection
        function handleOtherField(option, inputField) {
            const element = document.getElementById(inputField);
            if (element) {
                if (option === 'Other') {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                    element.value = '';
                }
            }
        }

        // Function to filter and show suggestions
        function showSuggestions(inputElement, suggestionsElement, options) {
            const filter = inputElement.value.toLowerCase().trim();
            const suggestions = options.filter(option => option.toLowerCase().includes(filter));
            suggestionsElement.innerHTML = suggestions.map(option => `<div class="suggestion-item" onclick="selectSuggestion('${option}', '${inputElement.id}', '${suggestionsElement.id}')">${option}</div>`).join('');
            suggestionsElement.style.display = suggestions.length > 0 ? 'block' : 'none';
        }

        // Function to handle suggestion selection
        function selectSuggestion(option, inputId, suggestionsId) {
            document.getElementById(inputId).value = option;
            document.getElementById(suggestionsId).style.display = 'none';
            handleOtherField(option, `other${inputId.charAt(0).toUpperCase() + inputId.slice(1, -5)}`);
            if (inputId === 'productInput') {
                updateItemCodeAndQualityChecks();
            }
        }

        // Function to handle item code input
        function handleItemCodeInput() {
            const itemCodeInput = document.getElementById('itemCodeInput');
            const productName = document.getElementById('productInput').value;
            const product = productData.products.find(p => p.code === itemCodeInput.value && p.name === productName);
            if (product) {
                generateQualityChecks(product.fields);
            } else {
                generateStandardQualityChecks();
            }
        }

        // Function to generate quality check fields based on product fields
        function generateQualityChecks(fields) {
            const qualityChecksContainer = document.getElementById('qualityChecksContainer');
            qualityChecksContainer.innerHTML = ''; // Clear previous fields
            
            fields.forEach(field => {
                const label = document.createElement('label');
                label.textContent = field.label;
    
                const checkRow = document.createElement('div');
                checkRow.classList.add('check-row');
    
                for (let i = 0; i < 3; i++) { // Generate three input fields per label
                    const input = document.createElement('input');
                    input.type = 'text';
		    input.required = true;  // Make the input field required
                    
                    input.name = field.name; // Unique name for each input
                    checkRow.appendChild(input);
                }
    
                qualityChecksContainer.appendChild(label);
                qualityChecksContainer.appendChild(checkRow);
            });
        }

        // Function to generate standard quality check fields
        function generateStandardQualityChecks() {
            const qualityChecksContainer = document.getElementById('qualityChecksContainer');
            qualityChecksContainer.innerHTML = ''; // Clear previous fields
            
            productData.standardFields.forEach(field => {
                const label = document.createElement('label');
                label.textContent = field.label;
    
                const checkRow = document.createElement('div');
                checkRow.classList.add('check-row');
    
                for (let i = 0; i < 3; i++) { // Generate three input fields per label
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = field.name; // Unique name for each input
                    checkRow.appendChild(input);
                }
    
                qualityChecksContainer.appendChild(label);
                qualityChecksContainer.appendChild(checkRow);
            });
        }

        // Hide suggestions when clicking outside
        document.addEventListener('click', (event) => {
            const inputIds = ['nameInput', 'supplierInput', 'productInput', 'itemCodeInput'];
            const suggestionsIds = ['nameSuggestions', 'supplierSuggestions', 'productSuggestions', 'itemCodeSuggestions'];
            inputIds.forEach(inputId => {
                const inputElement = document.getElementById(inputId);
                if (inputElement && !inputElement.contains(event.target)) {
                    const suggestionsElement = inputElement.nextElementSibling;
                    if (suggestionsElement) {
                        suggestionsElement.style.display = 'none';
                    }
                }
            });
            suggestionsIds.forEach(suggestionsId => {
                const suggestionsElement = document.getElementById(suggestionsId);
                if (suggestionsElement && !suggestionsElement.contains(event.target)) {
                    suggestionsElement.style.display = 'none';
                }
            });
        });

        // Attach event listeners for input fields
        document.getElementById('nameInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('nameInput'), document.getElementById('nameSuggestions'), nameOptions);
        });

        document.getElementById('supplierInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('supplierInput'), document.getElementById('supplierSuggestions'), supplierOptions);
        });

        document.getElementById('productInput').addEventListener('input', () => {
            showSuggestions(document.getElementById('productInput'), document.getElementById('productSuggestions'), productOptions);
            updateItemCodeAndQualityChecks();
        });

        // Update item code and quality checks based on selected product
        function updateItemCodeAndQualityChecks() {
            const productName = document.getElementById('productInput').value;
            const product = productData.products.find(p => p.name === productName);
            if (product) {
                document.getElementById('itemCodeInput').value = product.code;
                generateQualityChecks(product.fields);
            } else {
                document.getElementById('itemCodeInput').value = '';
                generateStandardQualityChecks();
            }
        }

        document.getElementById('itemCodeInput').addEventListener('input', handleItemCodeInput);

        // Handle form submission
        function submitForm(event) {
            event.preventDefault(); // Prevent default form submission
            // no internet connection alert
              if (!navigator.onLine) {
        alert('No internet connection.');
        return;
    }
            // Gather form data
            const formData = {
                code: referenceNumber,
                name: document.getElementById('nameInput').value,
                date: document.getElementById('date').value,
                supplierName: document.getElementById('supplierInput').value,
                billNo: document.getElementById('billNo').value,
		gateEntryNo: document.getElementById('gateEntryNo').value,
                productName: document.getElementById('productInput').value,
                invoiceQuantity: document.getElementById('invoiceQuantity').value,
                actualQuantity: document.getElementById('actualQuantity').value,
                itemCode: document.getElementById('itemCodeInput').value,
                qualityChecks: [],
                remark: document.getElementById('remark').value,
                actionTaken: document.getElementById('actionTaken').value
            };

      // Collect all quality check values
        const qualityChecksContainer = document.getElementById('qualityChecksContainer');
        const checkRows = qualityChecksContainer.querySelectorAll('.check-row');
        checkRows.forEach((row) => {
            const inputs = row.querySelectorAll('input');
            inputs.forEach((input) => {
                formData.qualityChecks.push({ name: input.name, value: input.value });
            });
        });
            

            // Prepare data to send
            // const dataToSend = JSON.stringify(formData);
             console.log(formData);
             var url = 'https://script.google.com/macros/s/AKfycbz8UfxuXQhqo8RTjIh3XRbpEzAm7XjmHsvg2nU3X1Qpynj7uM-zfBib0m_wHCmabqMD/exec';
                fetch(url, {
                    redirect:"follow",
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8',
                    },
                   
                })
                .then(response => {
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
            if (data.status === 'success') {
                alert("Form submitted successfully.\nReference number :- "+referenceNumber );
                document.getElementById('inspectionForm').reset();
                document.getElementById('date').value = new Date().toISOString().split('T')[0];
                document.getElementById('qualityChecksContainer').innerHTML = '';
                location.reload(); //it refresh the page after click 'ok' to successful alert message.
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch((error) => {
            alert('Failed to submit the form.');
            console.error('Error:', error);
        });
};
         document.addEventListener('focusin', (event) => {
            const target = event.target;
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT') {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
