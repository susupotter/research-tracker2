import { Pipe, PipeTransform } from "@angular/core";
import { RadioValue } from "../component/radio-field/radio-value";



@Pipe({ name: 'userTypeShow' })
export class UserTypeShowPipe implements PipeTransform {
  private roleList: RadioValue[] = [{ label: "นักวิจัยประเภทอาจารย์", value: "T" }, { label: "นักวิจัยประเภทนักศึกษา", value: "S" }, { label: "นักวิจัยประเภทเจ้าหน้าที่", value: "O" }, { label: "บุคคลทั่วไป", value: "P" }];
  transform(value: String){
    for (let type of this.roleList) {
      if (type.value === value) {
        return type.label
      }
    }
  }
}