using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Data
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal UnitPrice  { get; set; }
        public string ProductCode { get; set; }

        public int CategoryId { get; set; }
    }
}