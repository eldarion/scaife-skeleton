import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
// import { faExpand } from '@fortawesome/free-solid-svg-icons/faExpand';
// import { faCompress } from '@fortawesome/free-solid-svg-icons/faCompress';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faColumns } from '@fortawesome/free-solid-svg-icons/faColumns';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons/faPlusSquare';

import { faExpand } from './faExpand';
import { faCompress } from './faCompress';

const iconMap = [
  faArrowLeft,
  faArrowRight,
  faExpand,
  faCompress,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faTimes,
  faBook,
  faColumns,
  faMinusCircle,
  faPlusSquare,
].reduce((map, obj) => {
  map[obj.iconName] = obj;
  return map;
}, {});

export default iconMap;
