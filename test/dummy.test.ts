import * as vscode from "./mocks/vscode";
jest.mock('vscode', () => vscode, { virtual: true });

describe("Dummy", () => {
    it("shoule be True", () => {

        expect(true).toBeTruthy();
    });

});
