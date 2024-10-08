/* global globalThis */
import './setupJsdomMocks';
import { JSDOM } from 'jsdom';
import { configure } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// Setup JSDOM
const dom = new JSDOM('', {
  // Enable `requestAnimationFrame` which Preact uses internally.
  pretendToBeVisual: true,
});

globalThis.Event = dom.window.Event;
globalThis.Node = dom.window.Node;

// @ts-ignore
globalThis.window = dom.window;
globalThis.document = dom.window.document;
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame;

configure({ adapter: new ReactSeventeenAdapter() });
