export function calculateSetTravelRun(set,travel,run) {
  if (set ? (travel || run) : (travel && run))
  {
    if (set && travel)
    {
      run = Math.pow(set, 2) + Math.pow(travel, 2);
      run = Math.sqrt(run);
      return [set,travel,run];
    }
    else if (set && run)
    {
      travel = Math.pow(set, 2) + Math.pow(run, 2);
      travel = Math.sqrt(travel);
      return [set,travel,run];
    }
    else if (travel && run)
    {
      set = Math.pow(travel, 2) + Math.pow(run, 2);
      set = Math.sqrt(set);
      return [set,travel,run];
    }
  }
  return [];
}

export function calculateRollingOffset(setback,travel,offset,rise,angle) {

  const setbackConstants = {'60': 0.577, '45': 1.000, '22.5': 2.414};
  const travelConstants = {'60': 1.155, '45': 1.414, '22.5': 2.613};

  if (offset && rise && angle)
  {
    var trueOffset;
    trueOffset = Math.pow(offset, 2) + Math.pow(rise, 2);
    trueOffset = Math.sqrt(trueOffset);
    if (angle === 60)
    {
      travel = trueOffset * travelConstants[angle];
      setback = trueOffset * setbackConstants[angle];
    }
    else if (angle === 45)
    {
      travel = trueOffset * travelConstants[angle];
      setback = trueOffset * setbackConstants[angle];
    }
    else if (angle === 22.5)
    {
      travel = trueOffset * travelConstants[angle];
      setback = trueOffset * setbackConstants[angle];
    }
    return [setback,travel,offset,rise,angle];
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
  if (rise && length && height)
  {
    triRad = Math.atan(height / length); // triRad is radians
    triDeg = triRad * 180.0 / Math.PI; // triDeg is degrees
    cutA = Math.sqrt(Math.pow(1.0 * length,2) + Math.pow(1.0 * height,2));
    triDeg2 = (180.0 - triDeg) / 2.0; // triDeg2 is degrees
    triRad2 = triDeg2 * Math.PI / 180.0; // triRad2 is radians
    cutB = 1.0 * rise / Math.tan(triRad2);
    cutC = cutB * 2;

    return [cutA,cutB,cutC];
  }
  return [];
}
