export interface IResearchStatusActionDisplay {
    nextStatus: string;
    statusActionTitle: string;
    nextActionLabel: string;
  }
  
  export class ResearchStatusActionDisplay {
    public nextStatus: string;
    public statusActionTitle: string;
    public nextActionLabel: string;
  
    constructor(obj?: IResearchStatusActionDisplay) {
      this.nextStatus = obj.nextStatus;
      this.statusActionTitle = obj.statusActionTitle;
      this.nextActionLabel = obj.nextActionLabel;
    }

    public static readonly waitForContract
    = new ResearchStatusActionDisplay({
      nextStatus: "firstPayment",
      statusActionTitle: "บันทึกวันที่ทำสัญญา",
      nextActionLabel: "บันทึก"
    })

  public static readonly firstPayment
    = new ResearchStatusActionDisplay({
      nextStatus: "waitForProgress",
      statusActionTitle: "ส่งเบิกงวดที่ 1",
      nextActionLabel: "บันทึก"
    })

  public static readonly waitForProgress
    = new ResearchStatusActionDisplay({
      nextStatus: "secondPayment",
      statusActionTitle: "ได้รับรายงานความก้าวหน้า",
      nextActionLabel: "บันทึก"
    })

    public static readonly waitForProgressResearcher
    = new ResearchStatusActionDisplay({
      nextStatus: "secondPayment",
      statusActionTitle: "ส่งรายงานความก้าวหน้า",
      nextActionLabel: "ส่งรายงาน"
    })

    public static readonly secondPayment
    = new ResearchStatusActionDisplay({
      nextStatus: "waitForProjectFinished",
      statusActionTitle: "ส่งเบิกงวดที่ 2",
      nextActionLabel: "บันทึก"
    })

  public static readonly waitForProjectFinished
    = new ResearchStatusActionDisplay({
      nextStatus: "projectFinished",
      statusActionTitle: "ได้รับงานวิจัยฉบับสมบูรณ์",
      nextActionLabel: "บันทึก"
    })
    public static readonly waitForProjectFinishedResearcher
    = new ResearchStatusActionDisplay({
      nextStatus: "projectFinished",
      statusActionTitle: "ส่งรายงานงานวิจัยฉบับสมบูรณ์",
      nextActionLabel: "ส่งงานวิจัย"
    })

    public static readonly projectFinished
    = new ResearchStatusActionDisplay({
      nextStatus: "lastPayment",
      statusActionTitle: "ส่งรายงานงานวิจัยฉบับสมบูรณ์",
      nextActionLabel: "ส่งงานวิจัย"
    })

    public static readonly lastPayment
    = new ResearchStatusActionDisplay({
      nextStatus: "finished",
      statusActionTitle: "ส่งเบิกงวดที่ 3",
      nextActionLabel: "บันทึก"
    })

  public static readonly rejectContract
    = new ResearchStatusActionDisplay({
      nextStatus: "rejectContract",
      statusActionTitle: "ยกเลิกทุน",
      nextActionLabel: "ยกเลิกทุน",
    })
  
}