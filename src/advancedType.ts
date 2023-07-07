// Union
type Status = 'active' | 'inactive';

interface User {
  name: string;
  status: Status;
}

const user: User = {
  name: 'Alice',
  status: 'active',
};

// Intersection
type Printable = {
  print: () => void;
};

type Audible = {
  play: () => void;
};

type Media = Printable & Audible;

const media: Media = {
  print() {
    console.log('Printing...');
  },
  play() {
    console.log('Playing...');
  },
};
