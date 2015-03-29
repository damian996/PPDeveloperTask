using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
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
                return Request.CreateResponse(HttpStatusCode.OK, basket);
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
    }
}
