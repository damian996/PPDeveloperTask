using ParentPayDeveloperTask.Models;
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
            },
            new Category()
            {
                CategoryId = 3,
                Name = "Girls Clothing",
                Description = "Clothing for girls",
                Products = products.Where(p=>p.CategoryId == 3).ToArray()
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
                Name = "Badge",
                UnitPrice = 0.5M,
                ProductCode = "UCL002",
                CategoryId = 1
            },
            new Product()
            {
                ProductId = 3,
                Name = "Back Pack",
                UnitPrice = 0.89M,
                ProductCode = "UCL003",
                CategoryId = 1
            },
            new Product()
            {
                ProductId = 4,
                Name = "Trousers",
                UnitPrice = 5.99M,
                ProductCode = "BCL001",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 5,
                Name = "Shirt",
                UnitPrice = 4.99M,
                ProductCode = "BCL002",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 6,
                Name = "Blazer",
                UnitPrice = 12.99M,
                ProductCode = "BCL003",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 7,
                Name = "Sport Shorts",
                UnitPrice = 3.89M,
                ProductCode = "BCL004",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 8,
                Name = "Sport Socks",
                UnitPrice = 2.89M,
                ProductCode = "BCL005",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 9,
                Name = "Sports Top",
                UnitPrice = 7.99M,
                ProductCode = "BCL006",
                CategoryId = 2
            },
            new Product()
            {
                ProductId = 10,
                Name = "Trousers",
                UnitPrice = 5.99M,
                ProductCode = "GCL001",
                CategoryId = 3
            },
            new Product()
            {
                ProductId = 11,
                Name = "Skirt",
                UnitPrice = 5.5M,
                ProductCode = "GCL002",
                CategoryId = 3
            },
            new Product()
            {
                ProductId = 12,
                Name = "Shirt",
                UnitPrice = 4.99M,
                ProductCode = "GCL003",
                CategoryId = 3
            },
            new Product()
            {
                ProductId = 13,
                Name = "Blazer",
                UnitPrice = 12.99M,
                ProductCode = "GCL004",
                CategoryId = 3
            },
        };

        public IQueryable<Category> GetAllProducts()
        {
            return categories.AsQueryable();
        }
    }
}