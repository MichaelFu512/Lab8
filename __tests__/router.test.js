import { TestScheduler } from "@jest/core";
import { pushToHistory } from '../scripts/router';
/**
 * @jest-environment jsdom
 */
describe('pushToHistory', () => {
    test('settings', ()=> {
        expect(pushToHistory('settings').state.page).toEqual('settings');
    });

    test('entry', () => {
        expect(pushToHistory('entry', 5).state.page).toEqual('entry5');
    })
    test('default', () => {
        expect(pushToHistory().state.page).toEqual();
    });
});