using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Models
{
    public class Basket
    {
        public int BasketId { get; set; }
        public decimal Total { get; set; }

        public ICollection<BasketItem> BasketItems { get; set; }
    }
}