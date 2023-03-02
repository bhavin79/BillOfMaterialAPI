import express from "express";
const routes = express.Router();


import  {getRate, patchtRate} from "../Controllers/rate.js"
import {getHardware, postHardware, patchHardware, getAllHardware, addHardwareToProduct} from '../Controllers/hardware.js';
import {getProduct, getAllProduct, postProduct, patchProduct}  from '../Controllers/products.js';
import {getAllPart, getPart, patchPart, postPart, addToProduct} from "../Controllers/parts.js"

routes.route('/parts').get(getAllPart).post(postPart);
routes.route('/parts/:id').get(getPart).patch(patchPart).post(addToProduct);
   
routes.route('/rate/:sap').get(getRate).patch(patchtRate);


routes.route("/hardware").get(getAllHardware).post(postHardware)
routes.route('/hardware/:id').get(getHardware).patch(patchHardware).post(addHardwareToProduct);  
 

routes.route('/').get(getAllProduct).post(postProduct);
routes.route('/:sap').get(getProduct).patch(patchProduct);



//get Part, Add Part, patch Part, {id needed} {sap needed}
//get product, add product, update product, {sap needed}
//get rate, add rate, patch rate, {sap needed}

export {routes};