using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ParentPayDeveloperTask.Controllers
{
    public class ProductsController : ApiController
    {
        private IRepository _repo;

        public ProductsController(IRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Category> Get()
        {
            var products = _repo.GetAllProducts();

            return products;
        }
    }
}
