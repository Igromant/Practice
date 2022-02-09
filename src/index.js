import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import valid from './modules/valid'
import tabs from './modules/tabs'
import scroll from './modules/scroll'
import slider from './modules/slider'
import calculator from './modules/calculator'
import sendForms from './modules/sendForms'



timer('28 Feb 2022')
menu()
modal()
valid()
tabs()
slider()
calculator()
scroll()
sendForm({
    formId: "form1",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
  sendForm({
    formId: "form2",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });
  sendForm({
    formId: "form3",
    someElem: [
      {
        type: "block",
        id: "total",
      },
    ],
  });