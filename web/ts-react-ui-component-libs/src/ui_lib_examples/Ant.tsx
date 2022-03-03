import {
  InputNumber,
  Typography,
  ConfigProvider,
  Button,
  Timeline,
  TreeSelect,
  Pagination,
  Select,
  Steps,
  Badge,
  Avatar,
} from "antd";
import { useState } from "react";
import "antd/dist/antd.variable.min.css";

const { Title } = Typography;
const { TreeNode } = TreeSelect;
const { Step } = Steps;
const { Option } = Select;

// No way to turn on dark mode with a config provider yet apparently
// https://github.com/ant-design/ant-design/issues/23371
ConfigProvider.config({
  theme: {
    primaryColor: "#34aa9a",
  },
});

const AntExample = () => {
  const [treeSelection, setTreeSelection] = useState(["leaf1"]);
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <ConfigProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "64px",
          padding: "32px 0px",
        }}
      >
        <Title>Ant Example</Title>
        <InputNumber addonBefore="+" defaultValue={100} addonAfter="$" />
        <div style={{ display: "flex", gap: "8px" }}>
          <Button>Some Button</Button>
          <Button type="link">A text button</Button>
          <Button type="primary" shape="circle">
            O
          </Button>
        </div>
        <Timeline>
          <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Solve initial network problems 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
        <TreeSelect
          showSearch
          style={{ minWidth: "320px" }}
          value={treeSelection}
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Please select"
          allowClear
          multiple
          treeDefaultExpandAll
          onChange={setTreeSelection}
        >
          <TreeNode value="parent 1" title="parent 1">
            <TreeNode value="parent 1-0" title="parent 1-0">
              <TreeNode value="leaf1" title="my leaf" />
              <TreeNode value="leaf2" title="your leaf" />
            </TreeNode>
            <TreeNode value="parent 1-1" title="parent 1-1">
              <TreeNode
                value="sss"
                title={<b style={{ color: "#08c" }}>sss</b>}
              />
            </TreeNode>
          </TreeNode>
        </TreeSelect>
        <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={(total) => `Total ${total} items`}
        />
        <Steps
          type="navigation"
          size="small"
          current={currentStep}
          onChange={setCurrentStep}
          className="site-navigation-steps"
        >
          <Step status="finish" title="finish 1" />
          <Step status="finish" title="finish 2" />
          <Step status="process" title="current process" />
          <Step status="wait" title="wait" disabled />
        </Steps>
        <Select
          mode="multiple"
          style={{ minWidth: "320px" }}
          placeholder="select one country"
          defaultValue={["china"]}
          optionLabelProp="label"
        >
          <Option value="china" label="China">
            <div className="demo-option-label-item">
              <span role="img" aria-label="China">
                🇨🇳
              </span>
              China (中国)
            </div>
          </Option>
          <Option value="usa" label="USA">
            <div className="demo-option-label-item">
              <span role="img" aria-label="USA">
                🇺🇸
              </span>
              USA (美国)
            </div>
          </Option>
          <Option value="japan" label="Japan">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Japan">
                🇯🇵
              </span>
              Japan (日本)
            </div>
          </Option>
          <Option value="korea" label="Korea">
            <div className="demo-option-label-item">
              <span role="img" aria-label="Korea">
                🇰🇷
              </span>
              Korea (韩国)
            </div>
          </Option>
        </Select>
        <Badge count={5}>
          <Avatar shape="square" size="large" />
        </Badge>
      </div>
    </ConfigProvider>
  );
};

export { AntExample };
