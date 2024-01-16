import {ExampleModel} from "./model";

const data: ExampleModel[] = [{id: 1, name: "test"}];

export function getExamples(): ExampleModel[] {
    return data;
}