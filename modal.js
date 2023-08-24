let getData = async () => {
  try {
    let response = await fetch("./modal.JSON", { method: "GET" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    localStorage.setItem("Data", JSON.stringify(data)); // Store as a string
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getData();

var jsonDataStr = localStorage.getItem("Data");
var jsonData = JSON.parse(jsonDataStr);

var modalWrap = null;
const showModal = () => {
  if (modalWrap != null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog modal-dialog modal-lg" >
      <div class="modal-content">
        <div class="modal-header head">
           <div  class="detail">
           <div class="detailflex1"><i class='fa fa-user-circle' style="height:50px; width:50px;"></i></div>
           <div class="detailflex2">
           <div>${jsonData.patient.name}</div>
           <div>${jsonData.patient.personalInfo}</div>
           </div>
           </div>
           <div class="modal-title res" id="exampleModalLabel">
           <div>Residant</div>
           <input type="text" value="${jsonData.patient.residence}" class="form-control" id="recipient-name">
           </div>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row idclass"> 
              <div class="col-sm-4 idclassflex1" > 
              <div class="row container inputs inputsformd">
                 <div class="col-sm-9 inputsflex1 inputsformdflex1">Patient ID</div>
                 <div class="col-sm-3 inputsflex2 inputsformdflex2"><i class='fa fa-id-card'></i></div>
              </div>
              <input type="text" value="${jsonData.patient.ID}" class="form-control" id="inBgColor">
              </div>
              <div class="col-sm-4 idclassflex2 "> 
                <div class="row container inputs">
                 <div class="col-sm-9 inputsflex1">Visited ID</div>
                 <div class="col-sm-3  inputsflex2"><i class="fa fa-calendar" ></i></div>
               </div>
               <input type="text" value="${jsonData.patient.visitedId}" class="form-control" id="inBgColor">
              </div>
              <div class="col-sm-4 idclassflex3"> 
              <div class="row container inputs">
                <div class="col-sm-9 inputsflex1">Ward No.</div>
                <div class="col-sm-3 inputsflex2"><i class="fa fa-hospital-o" aria-hidden="true"></i></div>
              </div>
              <input type="text" value="${jsonData.patient.ward}" class="form-control" id="inBgColor" >
              </div>
            </div>
            <br>
            <div class="form-group row"> 
              <div class="col-sm-6"> 
                <div class="row container inputs">
                 <div class="col-sm-9 inputsflex1">Bed(F5-102)</div>
                 <div class="col-sm-3  inputsflex2"> <i class="fa fa-bed"></i></div>
              </div>
              <input type="text" value="${jsonData.patient.bed}" class="form-control" id="inBgColor">
              </div>
              <div class="col-sm-6">
                <div class="row container inputs">
                 <div class="col-sm-9 inputsflex1">Payor</div>
                 <div class="col-sm-3 inputsflex2"><i class="fa fa-umbrella" aria-hidden="true"></i></div>
               </div>
                <input type="text" value="${jsonData.patient.payor}" class="form-control" id="inBgColor"></div>
            </div>
          </form>
        </div>
        <div class="col">
        <div class="row container admi" style="margin-top:10px">
           <div class="col-sm-8 admiflex1">ADMISIION JOURNEY</div>
           <div class="col-sm-2 admiflex2 elipse">elisped time</div>
           <input type="text" style= "width:70px;" value="02:03" class="col-sm-2 admiflex3">
            
        </div>
           <br>
           <div class="row container flow">
              <div class="col-sm-2 flowflex1"></div>
              <button class="btn btn-success col-sm-4 flowflex2" style="border-radius:50%; height:50px ;width:50px;"> <i class="fa fa-check" aria-hidden="true"></i></button>
              <div class="col-sm-6 flowflex3">
                 <div class="currentinfo">Admission Request<span class="date">Dec 06 2021 08:36 AM</span></div> 
                 <div><i class="fa fa-user-md doctor"></i>${jsonData.patient.doctor1}</div>
              </div>
            </div>
            <div class="line">
              <div class="lineflex1">00:22</div>
              <div class="lineflex2 line1"></div>
              <div  class="lineflex3"></div>
            </div>
            <div class="row container flow">
              <div class="col-sm-2 flowflex1"></div>
              <button class="btn btn-success col-sm-4 flowflex2" style="border-radius:50%; height:50px ;width:50px;"> <i class="fa fa-check" aria-hidden="true"></i></button>
              <div class="col-sm-6 flowflex3">
                <div class="currentinfo">Sent for IGL Approval<span class="date">Dec 06 2021 09:00 AM</span></div> 
                <div><i class="fa fa-user-md doctor"></i>${jsonData.patient.doctor1}</div>
              </div>
           </div>
           <div class="line">
           <div class="lineflex1">01:22</div>
           <div class="lineflex2 line1"></div>
           <div  class="lineflex3"></div>
         </div>
           <div class="row container flow">
             <div class="col-sm-2 flowflex1"></div>
             <button class="btn btn-success col-sm-4 flowflex2" style="border-radius:50%; height:50px ;width:50px;"> <i class="fa fa-check" aria-hidden="true"></i></button>
             <div class="col-sm-6 flowflex3">
               <div class="currentinfo">Received IGL Approval<span class="date">Dec 06 2021 11:23 AM</span></div> 
               <div><i class="fa fa-user-md doctor"></i>${jsonData.patient.doctor2}</div>
             </div>
            </div> 
            <div class="line">
              <div class="lineflex1">02:23</div>
              <div class="lineflex2 line1"></div>
              <div  class="lineflex3"></div>
            </div>
            <div class="row container flow">
             <div class="col-sm-2 flowflex1"></div>
               <button class="btn btn-success flowflex2 col-sm-4" style="border-radius:50%; height:50px ;width:50px;"> <i class="fa fa-check" aria-hidden="true"></i></button>
               <div class="col-sm-6 flowflex3">
                 <div class="currentinfo currentinfont">RequestedBedConfirmation <span class="date">Dec 06 2021 11:38 AM</span></div> 
                 <div><i class="fa fa-user-md doctor"></i>${jsonData.patient.doctor2}</div>
               </div>
            </div>
            <div class="line2"></div>
            <div class="row container flow">
              <div class="col-sm-2 flowflex1"></div>
              <button class="btn btn-secondary flowflex2 col-sm-4" style="border-radius:50%; height:50px ;width:50px;"> <i class="	fa fa-plus-square"></i></button>
              <div class="col-sm-6 flowflex3 currentinfobelow">Admitted</div>
           </div>
             <div class="line2"></div>
           <div class="row container flow">
             <div class="col-sm-2 flowflex1"></div>
             <button class="btn btn-secondary flowflex2 col-sm-4" style="border-radius:50%; height:50px ;width:50px;"> <i class="fa fa-bed"></i></button>
             <div class="col-sm-6 flowflex3 currentinfobelow">Accepted</div>
           </div>

        <br>
        </div> 
      </div>  

    </div>
  </div>
 </div>
    `;
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  modal.show();
};
