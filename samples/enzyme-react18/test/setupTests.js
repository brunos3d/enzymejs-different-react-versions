import './setupJsdomMocks';
import { configure } from 'enzyme';
import Adapter from '@mnajdova/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
