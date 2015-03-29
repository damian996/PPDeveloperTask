using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParentPayDeveloperTask.Data
{
    public interface IRepository
    {
        IQueryable<Category> GetAllProducts();
        Product GetProduct(int productId);
    }
}
