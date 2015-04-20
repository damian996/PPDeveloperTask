using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Helpers
{
    public class BasketHelpers
    {
        public int ProcessBasket(Basket basket)
        {
            var rnd = new Random();

            basket.BasketId = rnd.Next(1000, 9999);

            var json = Newtonsoft.Json.JsonConvert.SerializeObject(basket);

            var fileName = String.Format("{0}.txt", basket.BasketId);
            var filePath = System.Web.HttpContext.Current.Server.MapPath(fileName);

            //write string to file
            using (File.Create(filePath)) { }
            File.WriteAllText(filePath, json);

            return basket.BasketId;
        }

        public Basket GetBasket(int basketId)
        {
            var fileName = String.Format("{0}.txt", basketId);
            var filePath = System.Web.HttpContext.Current.Server.MapPath(fileName);
            
            var json = File.ReadAllText(filePath);

            var basket = (Basket)Newtonsoft.Json.JsonConvert.DeserializeObject(json, typeof(Basket));

            return basket;
        }
    }
}