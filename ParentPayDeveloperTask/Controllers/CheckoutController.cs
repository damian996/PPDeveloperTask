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

            return Request.CreateResponse(HttpStatusCode.Created, basket);
            

            //return Request.CreateResponse(HttpStatusCode.BadRequest);
        }
    }
}
