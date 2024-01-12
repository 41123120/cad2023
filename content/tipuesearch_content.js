var tipuesearch = {"pages": [{'title': 'About', 'text': '\n', 'tags': '', 'url': 'About.html'}, {'title': '倉儲網站', 'text': 'https://github.com/41123120/cad2023 \n s1511 \n', 'tags': '', 'url': '倉儲網站.html'}, {'title': '專案二', 'text': '\n \n \n 軌道繪製過程 \n \n \n \n 軌道模擬丟進CoppeliaSim運作 \n', 'tags': '', 'url': '專案二.html'}, {'title': '任務一', 'text': '零組件圖檔 \n', 'tags': '', 'url': '任務一.html'}, {'title': '課程總結', 'text': '(✘)A: 是否按照進度明確標示倉儲的改版歷程 \n (✔)B: 是否根據 IPv4 與 IPv6 網路環境設定進行作法討論 \n (✔)C: 是否就 Replit、s.cycu.org 與 localhost 情境下對個人與分組倉儲進行設定操作 \n (✔)D: 是否就所分配的 CAD 套件從安裝設定到繪圖提供內容參考 \n (✔)E: 是否使用所分配的 CAD 套件完成專案一零組件繪圖, 並提供零組件下載 \n (✔)F: 是否將自行繪製的專案一零組件轉入 CoppeliaSim \n (✘)G: 是否利用 ZMQ Remote API Python 對專案一轉入的零組件設定感測器, 並進行鋼球永動模擬 \n (✘)H: 是否實際操作 Triangle 軌道系統的鋼球永動模擬 \n (✔)I: 是否完成 W15 的平面雙 U 迴路上的鋼球永動系統繪圖、轉檔與系統模擬 \n (✔)J: 是否使用所分配的 CAD 套件完成專案二 1D 平台零組件繪圖, 並提供零組件下載 \n (✘)K: 是否利用 ZMQ Remote API Python 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n (✘)L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 PID 控制理論進行資料收集與 ChatGPT 對答 \n', 'tags': '', 'url': '課程總結.html'}, {'title': '座位排序', 'text': '輸入:利用 Python 讀取下列檔案名稱為 2a_w12_seat.txt "2b stud num\xa0\xa0 \xa0seat ... \n 回覆結果: \n 你可以使用 Python 中的檔案讀取功能，來讀取這個檔案並處理其中的資料。以下是一個簡單的範例程式碼，可以讀取檔案並將資料列印出來： \n \n 輸入:假如前面程式中的座位號第一個 index 代表"列"而第二個 index 代表行, 請延續上個程式, 由左到右作為每一列的順序, 而且希望陣列排序是列出該位置上的學員學號 \n 回覆結果: \n 若希望按照座位順序列出學號，可以對讀取的資料進行整理和排序。以下是修改後的程式碼: \n \n 輸入:假如 "2a_w12_seat.txt" 可以從 "https://mde.tw/cadnote/downloads/2a_w12_seat.txt" 這個網址讀取, 而且希望將上一個 Python 程式改用 Brython 編寫, 要如何修改? \n 回覆結果: \n Brython 是一個將 Python 程式碼轉換為 JavaScript 的工具，允許在瀏覽器中執行 Python 程式碼。你可以使用 Brython 來在網頁上執行 Python 程式碼。以下是修改後的 Brython 程式碼，它可以讀取指定網址的檔案並按照指定要求處理： \n 首先，確保你的網頁中引入了 Brython 的相關腳本，例如： \n \n 接著，將上述 Python 程式碼轉換為 Brython 格式。以下是修改後的 Brython 程式碼： \n \n \n 這個範例使用了 Brython 和 requests 模組，並在網頁載入時執行  runBrythonScript  函數。注意，在瀏覽器環境中使用 Python 腳本需要特殊的轉換，Brython 正是為此而生。 \n \n \n \n \n \n \n \n 輸入:假如我們已經知道 Brython 可以利用 open(https://mde.tw/cadnote/downloads/2a_w12_seat.txt).read() 或 open(https://mde.tw/cadnote/downloads/2a_w12_seat.txt).readlines() 讀取到檔案, 可以將上一個程式全部改用 Brython 完成嗎? \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 回覆結果: \n \n 是的，如果你已經知道 Brython 可以使用  open(url).read()  或  open(url).readlines()  來讀取檔案，你可以將上一個程式碼全部改用 Brython 來完成。以下是修改後的 Brython 程式碼： \n \n 這個範例使用了 Brython 和 requests 模組，並在網頁載入時執行  runBrythonScript  函數。注意，在瀏覽器環境中使用 Python 腳本需要特殊的轉換，Brython 正是為此而生。 \n 座位表生成結果 \n \n \n \n \n \n \n \n', 'tags': '', 'url': '座位排序.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': '檔案', 'text': '檔案 \n \n \n \n \n \n', 'tags': '', 'url': '檔案.html'}]};