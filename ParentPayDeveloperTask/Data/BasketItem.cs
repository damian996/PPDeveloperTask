using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Data
{
    public class BasketItem
    {
        public int BasketItemId { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        public int BasketId { get; set; }
    }
}