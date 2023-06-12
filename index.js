const saturdayFun = function (want = "roller-skate") {
  return `This Saturday, I want to ${want}!`;
};

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

const wrapAdjective = function (flair = "*") {
  return function (blah = "special") {
    return `You are ${flair}${blah}${flair}!`;
  };
};
