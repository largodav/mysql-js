/*
 Copyright (c) 2012, 2015 Oracle and/or its affiliates. All rights
 reserved.
 
 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; version 2 of
 the License.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 02110-1301  USA
 */

"use strict";

// Setup globals:
global.mynode     = require("database-jones");
global.adapter    = "ndb";
global.harness    = require("jones-test");

var stats_module = require(mynode.api.stats);
var driver       = require("./JonesTestDriver");


// var storageEngine = null;

driver.processCommandLineOptions();

/* global.adapter is now set.  Read in the utilities library for the test suite; 
   it may set some additional globals.
*/
require("./utilities.js");


// /* Set storage engine from command-line options */
// if(storageEngine && global.test_conn_properties) {
//   global.test_conn_properties.mysql_storage_engine = storageEngine;
// }

/* Find and run all tests */
driver.addSuitesFromDirectory(mynode.fs.suites_dir);
driver.runAllTests();
