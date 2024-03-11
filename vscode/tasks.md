# 任务配置
是用于定义和配置任务的文件。任务可以是各种命令行操作，例如编译代码、运行测试、执行构建脚本等。通过配置 tasks.json，你可以定义自定义的任务，并为每个任务指定所需的命令、参数、工作目录等



## Sample
```json
{
  "tasks": [
    {
      "type": "cppbuild",
      "label": "C/C++: clang++ build active file",
      "command": "/usr/bin/clang++",
      "args": [
        "-fcolor-diagnostics",
        "-fansi-escape-codes",
        "-g",
        "${file}",
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}"
      ],
      "options": {
        "cwd": "${fileDirname}"
      },
      "problemMatcher": ["$gcc"],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "detail": "Task generated by Debugger."
    }
  ],
  "version": "2.0.0"
}
```

## Config
"label"：任务的名称。
"type"：任务类型，例如 "shell" 表示使用 shell 命令，"process" 表示直接运行可执行文件。
"command"：要执行的命令。
"args"：传递给命令的参数。
"options"：任务的额外选项，例如工作目录、环境变量等。
"detail": 任务列表中任务的描述
"isDefault": 
"dependsOrder": 定义依赖任务的执行顺序，可能的值有 sequence,
"dependsOn": 定义当前任务依赖的其他任务

## Variables
file: 当前活动文件，
fileDirname: 当前活动文件所在的目录
fileBasenameNoExtension: 当前活动文件的文件名，不包含后缀
workspaceFolder: 工作去文件夹

## Reference
- [vscode 编辑器变量](https://code.visualstudio.com/docs/editor/variables-reference)
- [vscode 任务配置表](https://code.visualstudio.com/docs/editor/tasks-appendix)