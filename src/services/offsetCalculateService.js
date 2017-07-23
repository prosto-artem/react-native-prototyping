export function calculateSetTravelRun(set,travel,run) {

  let setTemp, travelTemp, runTemp;
  setTemp = set;
  travelTemp = travel;
  runTemp = run;
  if (setTemp ? (travelTemp || runTemp) : (travelTemp && runTemp))
  {
    if (setTemp && travelTemp)
    {
      runTemp = Math.pow(setTemp, 2) + Math.pow(travelTemp, 2);
      runTemp = Math.sqrt(runTemp);
      return [setTemp,travelTemp,runTemp];
    }
    else if (setTemp && runTemp)
    {
      travelTemp = Math.pow(setTemp, 2) + Math.pow(runTemp, 2);
      travelTemp = Math.sqrt(travelTemp);
      return [setTemp,travelTemp,runTemp];
    }
    else if (travelTemp && runTemp)
    {
      setTemp = Math.pow(travelTemp, 2) + Math.pow(runTemp, 2);
      setTemp = Math.sqrt(setTemp);
      return [setTemp,travelTemp,runTemp];
    }
  }
  return [];
}

export function calculateRollingOffset(setback,travel,offset,rise,angle) {

  const setbackConstants = {'60': 0.577, '45': 1.000, '22.5': 2.414};
  const travelConstants = {'60': 1.155, '45': 1.414, '22.5': 2.613};

  let setBackTemp, travelTemp, offsetTemp, riseTemp, angleTemp;

  setBackTemp = setback;
  travelTemp = travel;
  offsetTemp = offset;
  riseTemp = rise;
  angleTemp = angle;

  if (offsetTemp && riseTemp && angleTemp)
  {
    var trueOffset;
    trueOffset = Math.pow(offsetTemp, 2) + Math.pow(riseTemp, 2);
    trueOffset = Math.sqrt(trueOffset);
    if (angleTemp === 60)
    {
      travelTemp = trueOffset * travelConstants[angleTemp];
      setBackTemp = trueOffset * setbackConstants[angleTemp];
    }
    else if (angleTemp === 45)
    {
      travelTemp = trueOffset * travelConstants[angleTemp];
      setBackTemp = trueOffset * setbackConstants[angleTemp];
    }
    else if (angleTemp === 22.5)
    {
      travelTemp = trueOffset * travelConstants[angleTemp];
      setBackTemp = trueOffset * setbackConstants[angleTemp];
    }
    return [setBackTemp,travelTemp,offsetTemp,rise,angleTemp];
  }
  return [];
}

export function calculateSquareOffset(rise,length,height) {
  let cutA;
  let cutB;
  let cutC;
  let triRad;
  let triRad2;
  let triDeg;
  let triDeg2;
  let riseTemp;
  let lengthTemp;
  let heightTemp;

  riseTemp = rise;
  lengthTemp = length;
  heightTemp = height;

  if (riseTemp && lengthTemp && heightTemp)
  {
    triRad = Math.atan(heightTemp / lengthTemp); // triRad is radians
    triDeg = triRad * 180.0 / Math.PI; // triDeg is degrees
    cutA = Math.sqrt(Math.pow(1.0 * lengthTemp,2) + Math.pow(1.0 * heightTemp,2));

    triDeg2 = (180.0 - triDeg) / 2.0; // triDeg2 is degrees
    triRad2 = triDeg2 * Math.PI / 180.0; // triRad2 is radians
    cutB = 1.0 * riseTemp / Math.tan(triRad2);

    cutC = cutB * 2;

    return [cutA,cutB,cutC];
  }
  return [];
}
