import { Component } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import { ServiceschedulerService } from '../../../services/servicescheduler.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {
 
 
  store: CustomStore;
   // add fields to the form
   onAppointmentFormCreated(e: any) {
    console.log("onAppointmentFormOpening fires");
  
    e.popup.option("showTitle", true);
    e.popup.option(
      "title",
      e.appointmentData.text
        ? e.appointmentData.text
        : "قم بإنشاء موعد جديد"
    );
  
    const form = e.form;
    let mainGroupItems = form.itemOption("mainGroup").items;
  
    let formItems = form.option("items");
     
      formItems.push({
        colSpan: 2,
        label: { text: "غرفة" },
        editorType: "dxSelectBox",  
        dataField: "rooms",
        editorOptions: {
          dataSource: ["Room 1", "Room 2", "Room 3"],  
          value: e.appointmentData.room 
        }
      });
      form.option("items", formItems);
    
  }

  constructor(private dataService: ServiceschedulerService, private router: Router) {
  {
  this.store = new CustomStore({
    key: "idAudience",
    load: (loadOptions) => {

      return new Promise((resolve, reject) => {
        dataService.getAudienceList().subscribe(
          (audienceList) => {
            resolve(audienceList);
            //alert("تم تحميل المواعيد بنجاح");
          },
          (error) => {
            reject(error);
          }
        );
      });
    },
    insert: (values) => {

      return dataService.addAppointment(values).toPromise();
    },
    update: (key, values) => {

      return dataService.updateAudience(key, values).toPromise();
    },
    remove: (key) => {
      return dataService.deleteAudience(key).toPromise().then(() => {
        
      }).catch(error => {
        console.log('Error deleting data:', error);
      });
    
    },
  });
  }
}
}
