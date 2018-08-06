export interface ISettingDisplay {
    fieldName: string;
    title: string;

}

export class SettingDisplay {
    public fieldName: string;
    public title: string;

    constructor(obj?: ISettingDisplay) {
        this.fieldName = obj.fieldName;
        this.title = obj.title;
    }

    public static readonly researcherType =
        new SettingDisplay({
            fieldName: "researcherType",
            title: "ประเภทนักวิจัย"
        })

    public static readonly sectorType =
        new SettingDisplay({
            fieldName: "sectorType",
            title: "หน่วยงานที่สังกัด"
        })

    public static readonly researchType =
        new SettingDisplay({
            fieldName: "researchType",
            title: "รูปแบบงานวิจัย"
        })

        public static readonly researchFundType =
        new SettingDisplay({
            fieldName: "researchFundType",
            title: "ประเภททุนวิจัย"
        })

        public static readonly researchFundOriginType =
        new SettingDisplay({
            fieldName: "researchFundOriginType",
            title: "ประเภทแหล่งทุนวิจัย"
        })

        public static readonly researchFundBudgetType =
        new SettingDisplay({
            fieldName: "researchFundBudgetType",
            title: "ประเภทงบประมาณทุนวิจัย"
        })

        public static readonly relatedSubject =
        new SettingDisplay({
            fieldName: "relatedSubject",
            title: "สาขาวิชาที่เกี่ยวข้อง"
        })

        public static readonly fundYear =
        new SettingDisplay({
            fieldName: "fundYear",
            title: "ปีงบประมาณ"
        })

        public static readonly strategyType =
        new SettingDisplay({
            fieldName: "strategyType",
            title: "ประเภทยุทธศาสตร์"
        })

        public static readonly organization =
        new SettingDisplay({
            fieldName: "organization",
            title: "หน่วยงาน"
        })

        public static readonly strategy =
        new SettingDisplay({
            fieldName: "strategy",
            title: "ยุทธศาสตร์"
        })

        public static readonly plan =
        new SettingDisplay({
            fieldName: "plan",
            title: "แผนงาน"
        })

        public static readonly issue =
        new SettingDisplay({
            fieldName: "issue",
            title: "ประเด็นวิจัย"
        })

        public static readonly objective =
        new SettingDisplay({
            fieldName: "objective",
            title: "เป้าประสงค์"
        })

}