// Copyright (c) 2009 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var selectionTxt = window.getSelection().toString();

if (selectionTxt.length == 0) {
	selectionTxt = document.title
}
var additionalInfo = {
    "msgtype": "link",
    "link": {
        "text": selectionTxt,
        "picUrl": "",
        "title": document.title,
        "messageUrl": document.URL
    }
};

chrome.runtime.connect().postMessage(additionalInfo);