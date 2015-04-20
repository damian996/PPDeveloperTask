using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ParentPayDeveloperTask.Controllers
{
    public class CheckoutController : ApiController
    {
        public HttpResponseMessage Post(Basket basket)
        {
            try
            {
                //Process the order and return result to the client side
                //Pretend that the basket ID is order confirmation number

                Random rnd = new Random();

                basket.BasketId = rnd.Next(1000, 9999);

                string json = Newtonsoft.Json.JsonConvert.SerializeObject(basket);

                var fileName = String.Format("{0}.txt", basket.BasketId);
                var filePath = System.Web.HttpContext.Current.Server.MapPath(fileName);
                
                //write string to file
                using (File.Create(filePath)) { }
                File.WriteAllText(filePath, json);                

                return Request.CreateResponse(HttpStatusCode.OK, basket);
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
    }
}
