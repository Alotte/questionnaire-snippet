import { atomWithStorage } from "jotai/utils";

export interface Cookie {
    access: string;
    refresh: string;
}
const questionnaireTitleAtom = atomWithStorage('title', "");

