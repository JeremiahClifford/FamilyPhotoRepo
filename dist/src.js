"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
let pages = [];
const createButton = async (comments, img) => {
    var _a, _b;
    let commentsFile = await (_a = comments, Promise.resolve().then(() => __importStar(require(_a))));
    let componentsOut = [];
    let buttonOut = `<button><img src="${await (_b = img, Promise.resolve().then(() => __importStar(require(_b))))}" alt="image"></button>`;
    componentsOut.push(buttonOut);
    let pageOut = `
    <div class="page">
        <img src="${img}" alt="image">
        <div class="commentsSections">`;
    for (let i = 0; i < commentsFile.comments.length; i++) {
        pageOut += `
        <h3>${commentsFile.comments[i].User}</h3>
        <p>${commentsFile.comments[i].Text}</p>
        `;
    }
    pageOut += `
        </div>
    </div>`;
    componentsOut.push(pageOut);
    return componentsOut;
};
const loopThroughImages = async (numImages) => {
    let componentsList = [];
    let buttons = [];
    let pages = [];
    for (let i = 1; i < numImages; i++) {
        let commentsFilePath = `./Data/${i}/comments.json`;
        let imageFilePath = `./Data/${i}/img.jpg`;
        let components = await createButton(commentsFilePath, imageFilePath);
        buttons.push(components[0]);
        pages.push(components[1]);
    }
    componentsList.push(buttons);
    componentsList.push(pages);
    return componentsList;
};
const fillInButtons = async () => {
    const numImages = (await Promise.resolve().then(() => __importStar(require("./Data/settings.json")))).numImages;
    let componentsList = await loopThroughImages(numImages);
    let buttons = componentsList[0];
    let pages = componentsList[1];
    let photoButtonArea = document.getElementById('photo-button-area');
    for (let i = 0; i < buttons.length; i++) {
        photoButtonArea.innerHTML += buttons[i];
    }
    return pages;
};
const main = async () => {
    pages = await fillInButtons();
};
main();
//# sourceMappingURL=src.js.map