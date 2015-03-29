using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ParentPayDeveloperTask.Data
{
    public class MockRepository : IRepository
    {
        private Category[] categories = new Category[]
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
                Products = products.Where(p=>p.CategoryId == 2).ToArray()
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
            new Product()
            {
                ProductId = 2,
                Name = "TShirt",
                UnitPrice = 35M,
                ProductCode = "UCL002",
                CategoryId = 1
            },
        };

        public IQueryable<Category> GetAllProducts()
        {
            return categories.AsQueryable();
        }

        public Product GetProduct(int productId)
        {
            return products.Where(p => p.ProductId == productId).Single();
        }
    }
}