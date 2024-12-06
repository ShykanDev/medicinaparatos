import { defineStore } from "pinia";

export const usePopUpStore = defineStore("popUp", {
  state: () => ({
    showPopUp: false,
    title:'',
    info1:'',
    info2:'',
    info3:'',
  }),
  actions:{
    setPopUp(title:string, info1:string, info2:string, info3:string){
      this.title = title
      this.info1 = info1
      this.info2 = info2
      this.info3 = info3
      this.showPopUp = true;
    },
    closePopUp(){
      this.showPopUp = false;
      this.title = ''
      this.info1 = ''
      this.info2 = ''
      this.info3 = ''
    },
    togglePopUp(){
      this.showPopUp = !this.showPopUp
    }
  },
  getters: {
    getPopUp: (state) => state.showPopUp,
    getTitle: (state) => state.title,
    getInfo1: (state) => state.info1,
    getInfo2: (state) => state.info2,
    getInfo3: (state) => state.info3
  },
});
