(function(window, document) {

    browserLanguageCheck();

    console.info('Flaps - Powered by Bill Dong.');

    const blocklyArea = document.getElementById('blockly-area'),
        blocklyDiv = document.getElementById('blockly-div'),
        workspace = Blockly.inject(blocklyDiv, {
            toolbox: document.getElementById('toolbox'),
            sounds: false,
            trashcan: false
        })

    const onresize = function(e) {
        var element = blocklyArea;
        var x = 0;
        var y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);

        blocklyDiv.style.left = x + 'px';
        blocklyDiv.style.top = y + 'px';
        blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
        blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(workspace);
    }

    window.onbeforeunload = function(event) {
        return 'Are you sure you want to close the window? The system will not save your work!';
    }

    window.addEventListener('resize', onresize, false);
    onresize();
    Blockly.svgResize(workspace);

    new Vue({
        el: '#tools-area',
        data: {
            clearModal: false
        },
        methods: {
            importBlockXMLFile(file) {
                var reader = new FileReader();
                reader.onload = function() {
                    if (reader.result) {
                        const xml = Blockly.Xml.textToDom(reader.result);
                        Blockly.Xml.domToWorkspace(xml, workspace);
                    }
                }
                reader.readAsText(file);
            },
            exportBlockXMLFile() {
                const xml = Blockly.Xml.workspaceToDom(workspace),
                    xml_text = Blockly.Xml.domToText(xml),
                    blob = new Blob([xml_text], {
                        type: "text/plain;charset=utf-8"
                    });

                saveAs(blob, 'flaps_export.xml');
            },
            clearWorkspace() {
                this.clearModal = true;
            },
            clearModalOk() {
                try {
                    Blockly.Xml.clearWorkspaceAndLoadFromXml('', workspace);
                } catch (e) {}
            }
        }
    })

    new Vue({
        el: '#header-right-btnGroup',
        methods: {
            generateCode() {
                const code = Blockly.JavaScript.workspaceToCode(workspace);

                if (code.trim() === '') {
                    this.$Modal.warning({
                        title: 'Generate code failed',
                        content: 'Code generation failed, please write some code. If a code already exists, check whether the parameters of the corresponding code are complete.'
                    });
                    return;
                }

                this.$Modal.success({
                    title: 'Successfully generated JS code',
                    content: codeToText(code),
                    scrollable: true
                });
            },
            downloadGenerateCode() {
                const code = Blockly.JavaScript.workspaceToCode(workspace),
                    blob = new Blob([code], {
                        type: "text/plain;charset=utf-8"
                    });

                saveAs(blob, 'flaps_code.js');
            },
            generateAndRunCode() {
                const code = Blockly.JavaScript.workspaceToCode(workspace);

                if (code.trim() === '') {
                    this.$Modal.warning({
                        title: 'Generate code failed',
                        content: 'Code generation failed, please write some code. If a code already exists, check whether the parameters of the corresponding code are complete.'
                    });
                    return;
                }

                try {
                    new Function(code)();
                } catch (e) {
                    this.$Modal.error({
                        title: 'Code fails to run',
                        content: 'Generated code failed with error: ' + e
                    });
                }
            }
        }
    })

})(window, document);
