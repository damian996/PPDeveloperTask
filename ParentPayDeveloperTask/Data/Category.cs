﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Data
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}