export interface IResearchStatusConst {
    status: String;
    order: number;
 }
 
 export class ResearchStatusConst {
    public status: String;
    public order: number;
 
    constructor(obj?: IResearchStatusConst) {
        if (obj) {
            this.status = obj.status;
            this.order = obj.order;
        }
    }
 
    public static getResearchStatusOrder = (status: String) => {
        for(let s of ResearchStatusConst.statusList ){
            if(status == s.status) return s.order;
        }
        return -1;
    }
 
    public static readonly statusList = [
        new ResearchStatusConst({
            status: "waitForApprove",
            order: 0
        }), new ResearchStatusConst({
            status: "waitForContract",
            order: 1
        }), new ResearchStatusConst({
            status: "firstPayment",
            order: 2
        }), new ResearchStatusConst({
            status: "waitForProgress",
            order: 3
        }), new ResearchStatusConst({
            status: "waitForProgressResearcher",
            order: 3
        }), new ResearchStatusConst({
            status: "progressSubmit",
            order: 4
        }), new ResearchStatusConst({
            status: "secondPayment",
            order: 5
        }), new ResearchStatusConst({
            status: "waitForProjectFinished",
            order: 6
        }), new ResearchStatusConst({
            status: "waitForProjectFinishedResearcher",
            order: 6
        }), new ResearchStatusConst({
            status: "finalSubmit",
            order: 7
        }), new ResearchStatusConst({
            status: "lastPayment",
            order: 8
        }), new ResearchStatusConst({
            status: "finished",
            order: 8
        })
 
 
    ]
 
    public static readonly waitForApprove = new ResearchStatusConst({
        status: "waitForApprove",
        order: 0
    })
 
    public static readonly waitForContract = new ResearchStatusConst({
        status: "waitForContract",
        order: 1
    })
 
    public static readonly firstPayment = new ResearchStatusConst({
        status: "firstPayment",
        order: 2
    })
 
    public static readonly waitForProgress = new ResearchStatusConst({
        status: "waitForProgress",
        order: 3
    })
 
    public static readonly waitForProgressResearcher = new ResearchStatusConst({
        status: "waitForProgressResearcher",
        order: 3
    })
 
    public static readonly progressSubmit = new ResearchStatusConst({
        status: "progressSubmit",
        order: 4
    })
 
    public static readonly secondPayment = new ResearchStatusConst({
        status: "secondPayment",
        order: 5
    })
 
    public static readonly waitForProjectFinished = new ResearchStatusConst({
        status: "waitForProjectFinished",
        order: 6
    })
 
    public static readonly waitForProjectFinishedResearcher = new ResearchStatusConst({
        status: "waitForProjectFinishedResearcher",
        order: 6
    })
 
    public static readonly finalSubmit = new ResearchStatusConst({
        status: "finalSubmit",
        order: 7
    })
 
    public static readonly lastPayment = new ResearchStatusConst({
        status: "lastPayment",
        order: 8
    })
 
    public static readonly finished = new ResearchStatusConst({
        status: "finished",
        order: 8
    })
 }
 
 
 