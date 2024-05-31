import { makeAutoObservable, runInAction } from "mobx";
import { StaffData } from "../models/StaffData";

class AboutUsStores {
    staffState: StaffData [] | undefined = undefined;
    awaiting: boolean = false;

    constructor() {
        makeAutoObservable(this);
    };

    loadStaffData = async () => {
        try {
            runInAction(() => {
                this.awaiting = true;
            });

            const response = await fetch('http://localhost:3001/staff');
            if (response.status === 200) {
                const data: StaffData [] = await response.json();

                runInAction(() => {
                    this.staffState = data;
                })
            }
        } catch (error) {
            console.log(error);
        } finally {
            runInAction(() => {
                this.awaiting = false;
            })
        }
    }
};

export const staffStore = new AboutUsStores();