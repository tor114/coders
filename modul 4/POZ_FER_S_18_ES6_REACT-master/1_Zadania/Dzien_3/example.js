function functionName() {
  return 2;
}

function functionName2(arg = 4) {
  return arg + 2;
}

const complexArg = {
  value: 4
};

function function3(complexArg) {
  return complexArg.value + 2;
}


function function4({ value }) {
  return value + 2;
}

function4(complexArg);


const fName = function (a, b) {
  return a + b;
};

// źle
// fArray() => {}

const fArray = () => 4;

const fArray2 = a => a + 4;

const fArray3 = (a) => a + 4;
const fArray4 = a => {
  return a + 4
};
const fArray5 = a => (a + 4);

const C1 = () => (
  <div>
    <p>Text</p>
  </div>
);

const C2 = () => {
  return (
    <div>
      <p>Text</p>
    </div>
  );
};

const C3 = () => {
  const content  = "Text";

  return (
    <div>
      <p>{content}</p>
    </div>
  );
};