using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Data
{
    public class MockRepository : IRepository
    {
        private static Category[] categories = new Category[]
        {
            new Category()
            {
                CategoryId = 1,
                Name = "Unisex Clothing",
                Description = "Clothing for boys and girls",
                Products = products.Where(p=>p.CategoryId == 1).ToArray()
            },
            new Category()
            {
                CategoryId = 2,
                Name = "Boys Clothing",
                Description = "Clothing for boys",
            }
        };

        private static Product[] products = new Product[]
        {
            new Product()
            {
                ProductId = 1,
                Name = "Tie",
                UnitPrice = 2.5M,
                ProductCode = "UCL001",
                CategoryId = 1
            },
        };

        public IQueryable<Category> GetCategories()
        {
            return categories.AsQueryable();
        }
    }
}