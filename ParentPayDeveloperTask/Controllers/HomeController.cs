﻿using ParentPayDeveloperTask.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ParentPayDeveloperTask.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult OrderConfirmation(string basket)
        {
            return View("OrderConfirmation", basket);
        }
    }
}