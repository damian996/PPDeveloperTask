using ParentPayDeveloperTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ParentPayDeveloperTask.Helpers
{
    public interface IBasketHelper
    {
        int ProcessBasket(Basket basket);
        Basket GetBasket(int basketId);
    }
}
