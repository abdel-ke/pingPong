"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_2__]);\nsocket_io_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__.io)(\"http://localhost:3001/\");\nconst Home = ()=>{\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let canvas;\n    let ctx;\n    const { 0: gameCodeInput , 1: setGameCodeInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: namePlayer , 1: setNamePlayer  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: gameCodeDisplay , 1: setGameCodeDisplay  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: initialScreen , 1: setinitialScreen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: gameActive , 1: setGameActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: playerNamber , 1: setPlayerNamber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // socket.connect();\n        // socket.on('connection', () => { console.log(\"connected\"); })\n        // socket.on('disconnect', () => { console.log('disconnected'); })\n        // socket.on('init', handlInit);\n        // socket.on('gameState', handlGameState);\n        // socket.on('gameOver', handleGameOver);\n        // socket.on('gameCode', handleGameCode);\n        // socket.on('unknownGame', handleUnknownGame);\n        // socket.on('tooManyPlayers', handletooManyPlayers);\n        return ()=>{\n        // socket.off('connect');\n        // socket.off('disconnect');\n        // socket.off('init');\n        // socket.off('gameState');\n        // socket.off('gameOver');\n        // socket.off('gameCode');\n        // socket.off('unknownGame');\n        // socket.off('tooManyPlayers');\n        };\n    }, []);\n    const init = (player)=>{\n        setGameActive(true);\n        setPlayerNamber(player);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"define canvas\");\n        if (canvasRef.current) {\n            console.log(\"inside canvas: \", playerNamber);\n            canvas = canvasRef.current;\n            ctx = canvas.getContext(\"2d\");\n            canvas.width = 600;\n            canvas.height = 400;\n            socket.emit(\"canvaSize\", {\n                width: canvas.width,\n                height: canvas.height\n            });\n            console.log(\"canvas.width: \", canvas.width, \"---- canvas.height: \", canvas.height);\n        }\n    }, [\n        !initialScreen\n    ]);\n    const newGame = ()=>{\n        setPlayerNamber(1);\n        socket.emit(\"newGame\", namePlayer);\n        init(1);\n    };\n    const joinGame = ()=>{\n        setPlayerNamber(2);\n        socket.emit(\"joinGame\", {\n            gameCode: gameCodeInput.toString(),\n            name: namePlayer\n        });\n        init(2);\n    };\n    // draw rect\n    const drawRect = (ctx, x, y, w, h, color)=>{\n        if (ctx) {\n            ctx.fillStyle = color;\n            ctx.fillRect(x, y, w, h);\n        }\n    };\n    const drawNet = (ctx)=>{\n        for(var i = 0; i <= canvas.height; i += 15)drawRect(ctx, canvas.width / 2 - 1, 0 + i, 2, 10, \"white\");\n    };\n    // //draw circle\n    const drawCircle = (ctx, x, y, r, color)=>{\n        if (ctx) {\n            ctx.fillStyle = color;\n            ctx.beginPath();\n            ctx.arc(x, y, r, 0, 2 * Math.PI, false);\n            ctx.closePath();\n            ctx.fill();\n        }\n    };\n    // // draw Text\n    const drawText = (ctx, text, x, y, color)=>{\n        if (ctx) {\n            ctx.fillStyle = color;\n            ctx.font = \"45px fantasy\";\n            ctx.fillText(text, x, y);\n        }\n    };\n    // PAGE GAME\n    const keydown = (e)=>{\n        // console.log(e.keyCode);\n        socket.emit(\"keyDown\", e.keyCode);\n    };\n    const paintGame = (ctx, gameState)=>{\n        const ball = gameState.ball;\n        drawRect(ctx, 0, 0, canvas.width, canvas.height, \"black\");\n        drawNet(ctx);\n        drawCircle(ctx, ball.x, ball.y, ball.radius, ball.color);\n        paintPlayers(ctx, gameState);\n    };\n    const paintPlayers = (ctx, gameState)=>{\n        const pOne = gameState.playerOne;\n        const pTwo = gameState.playerTwo;\n        drawRect(ctx, pOne.x, pOne.y, pOne.width, pOne.height, pOne.color);\n        drawRect(ctx, pTwo.x, pTwo.y, pTwo.width, pTwo.height, pTwo.color);\n        drawText(ctx, pOne.score.toString(), canvas.width / 4, canvas.height / 5, \"white\");\n        drawText(ctx, pTwo.score.toString(), canvas.width / 4 * 3, canvas.height / 5, \"white\");\n    };\n    const handlInit = (number)=>{\n        // setPlayerNamber(number);\n        setinitialScreen(true);\n    // init();\n    };\n    socket.off(\"init\").on(\"init\", handlInit);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"UseEffect playerNamber: \", playerNamber);\n    }, [\n        playerNamber\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"UseEffect gameActive: \", gameActive);\n    }, [\n        gameActive\n    ]);\n    let oneTime = false;\n    const handlGameState = (gameState)=>{\n        if (canvasRef.current) {\n            if (ctx?.clearRect) ctx?.clearRect(0, 0, canvas.width, canvas.height);\n            drawRect(ctx, 0, 0, canvas.width, canvas.height, \"black\");\n            document.addEventListener(\"keydown\", keydown);\n            if (!gameActive) {\n                console.log(\"gameActive handlegame ret : \", gameActive);\n                return;\n            }\n            let StateTemp = JSON.parse(gameState);\n            requestAnimationFrame(()=>paintGame(ctx, StateTemp));\n        }\n    };\n    socket.off(\"gameState\").on(\"gameState\", handlGameState);\n    const handleGameOver = (data)=>{\n        // if (!gameActive) {\n        //   return;\n        // }\n        data = JSON.parse(data);\n        setGameActive(false);\n        console.log(\"data.winner: \", data);\n        console.log(\"playerNamber: \", playerNamber);\n        console.log(\"gameCodeDisplay: |\", gameCodeDisplay, \"|\");\n        if (data === playerNamber) {\n            // alert('You Win!');\n            console.log(\"You Win!\");\n        } else {\n            // alert('You Lose :(');\n            console.log(\"You Lose :(\");\n        }\n    };\n    socket.off(\"gameOver\").on(\"gameOver\", handleGameOver);\n    const handlePlayerDisconnected = (player)=>{\n        if (player !== playerNamber) {\n            // alert('Your opponent disconnected');\n            console.log(\"Your opponent disconnected\");\n        }\n    /* if (player !== playerNamber) {\n      // alert('You were disconnected from the server.');\n      console.log('You were disconnected from the server.');\n    } else {\n      // alert('Your opponent was disconnected.');\n      console.log('Your opponent was disconnected.');\n    } */ };\n    socket.off(\"playerDisconnected\").on(\"playerDisconnected\", handlePlayerDisconnected);\n    const handleGameCode = (gameCode)=>{\n        // console.log(\"gameCode\", gameCode);\n        setGameCodeDisplay(gameCode);\n    // setinitialScreen(true);\n    };\n    socket.off(\"gameCode\").on(\"gameCode\", handleGameCode);\n    // useEffect(() => {\n    // } , [gameCodeDisplay]);\n    const handleUnknownGame = ()=>{\n        // reset();\n        alert(\"Unknown Game code\");\n    };\n    socket.off(\"unknownGame\").on(\"unknownGame\", handleUnknownGame);\n    const handletooManyPlayers = ()=>{\n        // reset();\n        alert(\"This Game is already in progress\");\n    };\n    socket.off(\"tooManyPlayers\").on(\"tooManyPlayers\", handletooManyPlayers);\n    // const reset = () => {\n    //   setGameCodeInput('');\n    //   setGameCodeDisplay('');\n    //   // setPlayerNamber(0)\n    //   setinitialScreen(false);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: !initialScreen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"initialScreen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Write your name\",\n                        id: \"name\",\n                        onChange: (e)=>{\n                            setNamePlayer(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 236,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Write the code\",\n                        id: \"code\",\n                        onChange: (e)=>{\n                            setGameCodeInput(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 237,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        id: \"joinGameBtn\",\n                        onClick: joinGame,\n                        children: \"join Game\"\n                    }, void 0, false, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 238,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        id: \"newGameBtn\",\n                        onClick: newGame,\n                        children: \"new Game\"\n                    }, void 0, false, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 239,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                lineNumber: 235,\n                columnNumber: 27\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"gameScreen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            namePlayer,\n                            \" your game code is: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                id: \"gameCodeDisplay\",\n                                children: gameCodeDisplay\n                            }, void 0, false, {\n                                fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                                lineNumber: 242,\n                                columnNumber: 49\n                            }, undefined),\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 242,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        ref: canvasRef,\n                        style: {\n                            border: \"1px solid #c3c3c3\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                        lineNumber: 243,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n                lineNumber: 241,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n            lineNumber: 234,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/abdel-ke/1337/pingPong/front_end/pages/index.tsx\",\n        lineNumber: 233,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2Zyb250X2VuZC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXG5cbmNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvJylcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIGxldCBjdHg6IGFueTtcblxuICBjb25zdCBbZ2FtZUNvZGVJbnB1dCwgc2V0R2FtZUNvZGVJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtuYW1lUGxheWVyLCBzZXROYW1lUGxheWVyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2dhbWVDb2RlRGlzcGxheSwgc2V0R2FtZUNvZGVEaXNwbGF5XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2luaXRpYWxTY3JlZW4sIHNldGluaXRpYWxTY3JlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZ2FtZUFjdGl2ZSwgc2V0R2FtZUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwbGF5ZXJOYW1iZXIsIHNldFBsYXllck5hbWJlcl0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHNvY2tldC5jb25uZWN0KCk7XG4gICAgLy8gc29ja2V0Lm9uKCdjb25uZWN0aW9uJywgKCkgPT4geyBjb25zb2xlLmxvZyhcImNvbm5lY3RlZFwiKTsgfSlcbiAgICAvLyBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7IGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWQnKTsgfSlcblxuICAgIC8vIHNvY2tldC5vbignaW5pdCcsIGhhbmRsSW5pdCk7XG4gICAgLy8gc29ja2V0Lm9uKCdnYW1lU3RhdGUnLCBoYW5kbEdhbWVTdGF0ZSk7XG4gICAgLy8gc29ja2V0Lm9uKCdnYW1lT3ZlcicsIGhhbmRsZUdhbWVPdmVyKTtcbiAgICAvLyBzb2NrZXQub24oJ2dhbWVDb2RlJywgaGFuZGxlR2FtZUNvZGUpO1xuICAgIC8vIHNvY2tldC5vbigndW5rbm93bkdhbWUnLCBoYW5kbGVVbmtub3duR2FtZSk7XG4gICAgLy8gc29ja2V0Lm9uKCd0b29NYW55UGxheWVycycsIGhhbmRsZXRvb01hbnlQbGF5ZXJzKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBzb2NrZXQub2ZmKCdjb25uZWN0Jyk7XG4gICAgICAvLyBzb2NrZXQub2ZmKCdkaXNjb25uZWN0Jyk7XG4gICAgICAvLyBzb2NrZXQub2ZmKCdpbml0Jyk7XG4gICAgICAvLyBzb2NrZXQub2ZmKCdnYW1lU3RhdGUnKTtcbiAgICAgIC8vIHNvY2tldC5vZmYoJ2dhbWVPdmVyJyk7XG4gICAgICAvLyBzb2NrZXQub2ZmKCdnYW1lQ29kZScpO1xuICAgICAgLy8gc29ja2V0Lm9mZigndW5rbm93bkdhbWUnKTtcbiAgICAgIC8vIHNvY2tldC5vZmYoJ3Rvb01hbnlQbGF5ZXJzJyk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGluaXQgPSAocGxheWVyOiBudW1iZXIpID0+IHtcbiAgICBzZXRHYW1lQWN0aXZlKHRydWUpO1xuICAgIHNldFBsYXllck5hbWJlcihwbGF5ZXIpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGVmaW5lIGNhbnZhc1wiKTtcbiAgICBpZiAoY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGNhbnZhczogXCIsIHBsYXllck5hbWJlcik7XG5cbiAgICAgIGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xuICAgICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjYW52YXMud2lkdGggPSA2MDA7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgc29ja2V0LmVtaXQoJ2NhbnZhU2l6ZScsIHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH0pO1xuICAgICAgY29uc29sZS5sb2coXCJjYW52YXMud2lkdGg6IFwiLCBjYW52YXMud2lkdGgsIFwiLS0tLSBjYW52YXMuaGVpZ2h0OiBcIiwgY2FudmFzLmhlaWdodCk7XG4gICAgfVxuICB9LCBbIWluaXRpYWxTY3JlZW5dKVxuXG4gIGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gICAgc2V0UGxheWVyTmFtYmVyKDEpO1xuICAgIHNvY2tldC5lbWl0KCduZXdHYW1lJywgbmFtZVBsYXllcik7XG4gICAgaW5pdCgxKTtcbiAgfVxuXG4gIGNvbnN0IGpvaW5HYW1lID0gKCkgPT4ge1xuICAgIHNldFBsYXllck5hbWJlcigyKTtcbiAgICBzb2NrZXQuZW1pdCgnam9pbkdhbWUnLCB7Z2FtZUNvZGU6IGdhbWVDb2RlSW5wdXQudG9TdHJpbmcoKSwgbmFtZTogbmFtZVBsYXllcn0pO1xuICAgIGluaXQoMik7XG4gIH1cblxuICAvLyBkcmF3IHJlY3RcbiAgY29uc3QgZHJhd1JlY3QgPSAoY3R4OiBhbnksIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY29sb3I6IHN0cmluZykgPT4ge1xuICAgIGlmIChjdHgpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBkcmF3TmV0ID0gKGN0eDogYW55KSA9PiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gY2FudmFzLmhlaWdodDsgaSArPSAxNSlcbiAgICAgIGRyYXdSZWN0KGN0eCwgKGNhbnZhcy53aWR0aCAvIDIpIC0gMSwgMCArIGksIDIsIDEwLCBcIndoaXRlXCIpO1xuICB9XG5cbiAgLy8gLy9kcmF3IGNpcmNsZVxuICBjb25zdCBkcmF3Q2lyY2xlID0gKGN0eDogYW55LCB4OiBudW1iZXIsIHk6IG51bWJlciwgcjogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGN0eCkge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG4gIH1cblxuICAvLyAvLyBkcmF3IFRleHRcbiAgY29uc3QgZHJhd1RleHQgPSAoY3R4OiBhbnksIHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoY3R4KSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICBjdHguZm9udCA9ICc0NXB4IGZhbnRhc3knO1xuICAgICAgY3R4LmZpbGxUZXh0KHRleHQsIHgsIHkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBBR0UgR0FNRVxuICBjb25zdCBrZXlkb3duID0gKGU6IGFueSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUua2V5Q29kZSk7XG4gICAgc29ja2V0LmVtaXQoJ2tleURvd24nLCBlLmtleUNvZGUpO1xuICB9XG5cbiAgY29uc3QgcGFpbnRHYW1lID0gKGN0eDogYW55LCBnYW1lU3RhdGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGJhbGwgPSBnYW1lU3RhdGUuYmFsbDtcbiAgICBkcmF3UmVjdChjdHgsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCwgXCJibGFja1wiKTtcbiAgICBkcmF3TmV0KGN0eCk7XG4gICAgZHJhd0NpcmNsZShjdHgsIGJhbGwueCwgYmFsbC55LCBiYWxsLnJhZGl1cywgYmFsbC5jb2xvcik7XG4gICAgcGFpbnRQbGF5ZXJzKGN0eCwgZ2FtZVN0YXRlKTtcbiAgfVxuXG4gIGNvbnN0IHBhaW50UGxheWVycyA9IChjdHg6IGFueSwgZ2FtZVN0YXRlOiBhbnkpID0+IHtcbiAgICBjb25zdCBwT25lID0gZ2FtZVN0YXRlLnBsYXllck9uZTtcbiAgICBjb25zdCBwVHdvID0gZ2FtZVN0YXRlLnBsYXllclR3bztcbiAgICBkcmF3UmVjdChjdHgsIHBPbmUueCwgcE9uZS55LCBwT25lLndpZHRoLCBwT25lLmhlaWdodCwgcE9uZS5jb2xvcik7XG4gICAgZHJhd1JlY3QoY3R4LCBwVHdvLngsIHBUd28ueSwgcFR3by53aWR0aCwgcFR3by5oZWlnaHQsIHBUd28uY29sb3IpO1xuICAgIGRyYXdUZXh0KGN0eCwgcE9uZS5zY29yZS50b1N0cmluZygpLCBjYW52YXMud2lkdGggLyA0LCBjYW52YXMuaGVpZ2h0IC8gNSwgXCJ3aGl0ZVwiKTtcbiAgICBkcmF3VGV4dChjdHgsIHBUd28uc2NvcmUudG9TdHJpbmcoKSwgKGNhbnZhcy53aWR0aCAvIDQpICogMywgY2FudmFzLmhlaWdodCAvIDUsIFwid2hpdGVcIik7XG4gIH1cblxuICBjb25zdCBoYW5kbEluaXQgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICAvLyBzZXRQbGF5ZXJOYW1iZXIobnVtYmVyKTtcbiAgICBzZXRpbml0aWFsU2NyZWVuKHRydWUpO1xuICAgIC8vIGluaXQoKTtcbiAgfVxuICBzb2NrZXQub2ZmKCdpbml0Jykub24oJ2luaXQnLCBoYW5kbEluaXQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJVc2VFZmZlY3QgcGxheWVyTmFtYmVyOiBcIiwgcGxheWVyTmFtYmVyKTtcbiAgfSwgW3BsYXllck5hbWJlcl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlVzZUVmZmVjdCBnYW1lQWN0aXZlOiBcIiwgZ2FtZUFjdGl2ZSk7XG4gIH0sIFtnYW1lQWN0aXZlXSlcblxuICBsZXQgb25lVGltZSA9IGZhbHNlO1xuICBjb25zdCBoYW5kbEdhbWVTdGF0ZSA9IChnYW1lU3RhdGU6IHN0cmluZykgPT4ge1xuICAgIGlmIChjYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgaWYgKGN0eD8uY2xlYXJSZWN0KVxuICAgICAgY3R4Py5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGRyYXdSZWN0KGN0eCwgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LCBcImJsYWNrXCIpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwga2V5ZG93bik7XG4gICAgICBpZiAoIWdhbWVBY3RpdmUpXG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZUFjdGl2ZSBoYW5kbGVnYW1lIHJldCA6IFwiLCBnYW1lQWN0aXZlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxldCBTdGF0ZVRlbXAgPSBKU09OLnBhcnNlKGdhbWVTdGF0ZSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcGFpbnRHYW1lKGN0eCwgU3RhdGVUZW1wKSk7XG4gICAgfVxuICB9XG4gIHNvY2tldC5vZmYoJ2dhbWVTdGF0ZScpLm9uKCdnYW1lU3RhdGUnLCBoYW5kbEdhbWVTdGF0ZSk7XG5cbiAgY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgLy8gaWYgKCFnYW1lQWN0aXZlKSB7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICBzZXRHYW1lQWN0aXZlKGZhbHNlKTtcbiAgICBjb25zb2xlLmxvZyhcImRhdGEud2lubmVyOiBcIiwgZGF0YSk7XG4gICAgY29uc29sZS5sb2coXCJwbGF5ZXJOYW1iZXI6IFwiLCBwbGF5ZXJOYW1iZXIpO1xuICAgIGNvbnNvbGUubG9nKFwiZ2FtZUNvZGVEaXNwbGF5OiB8XCIsIGdhbWVDb2RlRGlzcGxheSwgXCJ8XCIpO1xuXG4gICAgaWYgKGRhdGEgPT09IHBsYXllck5hbWJlcikge1xuICAgICAgLy8gYWxlcnQoJ1lvdSBXaW4hJyk7XG4gICAgICBjb25zb2xlLmxvZygnWW91IFdpbiEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gYWxlcnQoJ1lvdSBMb3NlIDooJyk7XG4gICAgICBjb25zb2xlLmxvZygnWW91IExvc2UgOignKTtcbiAgICB9XG4gIH1cblxuICBzb2NrZXQub2ZmKCdnYW1lT3ZlcicpLm9uKCdnYW1lT3ZlcicsIGhhbmRsZUdhbWVPdmVyKTtcbiAgXG4gIGNvbnN0IGhhbmRsZVBsYXllckRpc2Nvbm5lY3RlZCA9IChwbGF5ZXI6IG51bWJlcikgPT4ge1xuICAgIGlmIChwbGF5ZXIgIT09IHBsYXllck5hbWJlcikge1xuICAgICAgLy8gYWxlcnQoJ1lvdXIgb3Bwb25lbnQgZGlzY29ubmVjdGVkJyk7XG4gICAgICBjb25zb2xlLmxvZygnWW91ciBvcHBvbmVudCBkaXNjb25uZWN0ZWQnKTtcbiAgICB9XG4gICAgLyogaWYgKHBsYXllciAhPT0gcGxheWVyTmFtYmVyKSB7XG4gICAgICAvLyBhbGVydCgnWW91IHdlcmUgZGlzY29ubmVjdGVkIGZyb20gdGhlIHNlcnZlci4nKTtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3Ugd2VyZSBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgc2VydmVyLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBhbGVydCgnWW91ciBvcHBvbmVudCB3YXMgZGlzY29ubmVjdGVkLicpO1xuICAgICAgY29uc29sZS5sb2coJ1lvdXIgb3Bwb25lbnQgd2FzIGRpc2Nvbm5lY3RlZC4nKTtcbiAgICB9ICovXG4gIH1cbiAgc29ja2V0Lm9mZigncGxheWVyRGlzY29ubmVjdGVkJykub24oJ3BsYXllckRpc2Nvbm5lY3RlZCcsIGhhbmRsZVBsYXllckRpc2Nvbm5lY3RlZCk7XG5cbiAgY29uc3QgaGFuZGxlR2FtZUNvZGUgPSAoZ2FtZUNvZGU6IHN0cmluZykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZ2FtZUNvZGVcIiwgZ2FtZUNvZGUpO1xuICAgIHNldEdhbWVDb2RlRGlzcGxheShnYW1lQ29kZSk7XG4gICAgLy8gc2V0aW5pdGlhbFNjcmVlbih0cnVlKTtcbiAgfVxuICBzb2NrZXQub2ZmKCdnYW1lQ29kZScpLm9uKCdnYW1lQ29kZScsIGhhbmRsZUdhbWVDb2RlKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyB9ICwgW2dhbWVDb2RlRGlzcGxheV0pO1xuXG4gIGNvbnN0IGhhbmRsZVVua25vd25HYW1lID0gKCkgPT4ge1xuICAgIC8vIHJlc2V0KCk7XG4gICAgYWxlcnQoXCJVbmtub3duIEdhbWUgY29kZVwiKTtcbiAgfVxuICBzb2NrZXQub2ZmKCd1bmtub3duR2FtZScpLm9uKCd1bmtub3duR2FtZScsIGhhbmRsZVVua25vd25HYW1lKTtcblxuICBjb25zdCBoYW5kbGV0b29NYW55UGxheWVycyA9ICgpID0+IHtcbiAgICAvLyByZXNldCgpO1xuICAgIGFsZXJ0KFwiVGhpcyBHYW1lIGlzIGFscmVhZHkgaW4gcHJvZ3Jlc3NcIik7XG4gIH1cbiAgc29ja2V0Lm9mZigndG9vTWFueVBsYXllcnMnKS5vbigndG9vTWFueVBsYXllcnMnLCBoYW5kbGV0b29NYW55UGxheWVycyk7XG5cbiAgLy8gY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gIC8vICAgc2V0R2FtZUNvZGVJbnB1dCgnJyk7XG4gIC8vICAgc2V0R2FtZUNvZGVEaXNwbGF5KCcnKTtcbiAgLy8gICAvLyBzZXRQbGF5ZXJOYW1iZXIoMClcbiAgLy8gICBzZXRpbml0aWFsU2NyZWVuKGZhbHNlKTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHshaW5pdGlhbFNjcmVlbiA/IDxkaXYgaWQ9J2luaXRpYWxTY3JlZW4nPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdXcml0ZSB5b3VyIG5hbWUnIGlkPSduYW1lJyBvbkNoYW5nZT17KGUpID0+IHsgc2V0TmFtZVBsYXllcihlLnRhcmdldC52YWx1ZSkgfX0vPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdXcml0ZSB0aGUgY29kZScgaWQ9J2NvZGUnIG9uQ2hhbmdlPXsoZSkgPT4geyBzZXRHYW1lQ29kZUlucHV0KGUudGFyZ2V0LnZhbHVlKSB9fSAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD0nam9pbkdhbWVCdG4nIG9uQ2xpY2s9e2pvaW5HYW1lfT5qb2luIEdhbWU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgaWQ9J25ld0dhbWVCdG4nIG9uQ2xpY2s9e25ld0dhbWV9Pm5ldyBHYW1lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgIDogPGRpdiBpZD0nZ2FtZVNjcmVlbic+XG4gICAgICAgICAgICA8aDE+e25hbWVQbGF5ZXJ9IHlvdXIgZ2FtZSBjb2RlIGlzOiA8c3BhbiBpZD0nZ2FtZUNvZGVEaXNwbGF5Jz57Z2FtZUNvZGVEaXNwbGF5fTwvc3Bhbj4gPC9oMT5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgI2MzYzNjM1wiIH19PjwvY2FudmFzPlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJpbyIsInNvY2tldCIsIkhvbWUiLCJjYW52YXNSZWYiLCJjYW52YXMiLCJjdHgiLCJnYW1lQ29kZUlucHV0Iiwic2V0R2FtZUNvZGVJbnB1dCIsIm5hbWVQbGF5ZXIiLCJzZXROYW1lUGxheWVyIiwiZ2FtZUNvZGVEaXNwbGF5Iiwic2V0R2FtZUNvZGVEaXNwbGF5IiwiaW5pdGlhbFNjcmVlbiIsInNldGluaXRpYWxTY3JlZW4iLCJnYW1lQWN0aXZlIiwic2V0R2FtZUFjdGl2ZSIsInBsYXllck5hbWJlciIsInNldFBsYXllck5hbWJlciIsImluaXQiLCJwbGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImVtaXQiLCJuZXdHYW1lIiwiam9pbkdhbWUiLCJnYW1lQ29kZSIsInRvU3RyaW5nIiwibmFtZSIsImRyYXdSZWN0IiwieCIsInkiLCJ3IiwiaCIsImNvbG9yIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3TmV0IiwiaSIsImRyYXdDaXJjbGUiLCJyIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiY2xvc2VQYXRoIiwiZmlsbCIsImRyYXdUZXh0IiwidGV4dCIsImZvbnQiLCJmaWxsVGV4dCIsImtleWRvd24iLCJlIiwia2V5Q29kZSIsInBhaW50R2FtZSIsImdhbWVTdGF0ZSIsImJhbGwiLCJyYWRpdXMiLCJwYWludFBsYXllcnMiLCJwT25lIiwicGxheWVyT25lIiwicFR3byIsInBsYXllclR3byIsInNjb3JlIiwiaGFuZGxJbml0IiwibnVtYmVyIiwib2ZmIiwib24iLCJvbmVUaW1lIiwiaGFuZGxHYW1lU3RhdGUiLCJjbGVhclJlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJTdGF0ZVRlbXAiLCJKU09OIiwicGFyc2UiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJoYW5kbGVHYW1lT3ZlciIsImRhdGEiLCJoYW5kbGVQbGF5ZXJEaXNjb25uZWN0ZWQiLCJoYW5kbGVHYW1lQ29kZSIsImhhbmRsZVVua25vd25HYW1lIiwiYWxlcnQiLCJoYW5kbGV0b29NYW55UGxheWVycyIsImRpdiIsImlkIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayIsImgxIiwic3BhbiIsInJlZiIsInN0eWxlIiwiYm9yZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();