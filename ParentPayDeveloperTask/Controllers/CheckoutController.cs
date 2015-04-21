using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using ParentPayDeveloperTask.Helpers;

namespace ParentPayDeveloperTask.Controllers
{
    public class CheckoutController : ApiController
    {
        IBasketHelper _basketHelpers;

        public CheckoutController(IBasketHelper basketHelper)
        {
            _basketHelpers = basketHelper;
        }
        public HttpResponseMessage Post(Basket basket)
        {
            try
            {
                var basketId = _basketHelpers.ProcessBasket(basket);

                return Request.CreateResponse(HttpStatusCode.OK, basketId);
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }

        public HttpResponseMessage Get(int basketId)
        {
            try
            {
                var basket = _basketHelpers.GetBasket(basketId);

                return Request.CreateResponse(HttpStatusCode.OK, basket);
            }
            catch
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
        }
    }
}
