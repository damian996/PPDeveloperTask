using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ParentPayDeveloperTask.Controllers
{
    public class CategoriesController : ApiController
    {
        private IRepository _repo;

        public CategoriesController(IRepository repo)
        {
            _repo = repo;
        }
        public IEnumerable<Category> Get()
        {
            var categories = _repo.GetCategories();

            return categories;
        }
    }
}
